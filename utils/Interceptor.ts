import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ApiConfig from "../constants/ApiConfig";
import { storeData } from '../database/StoreData';

axios.defaults.baseURL = ApiConfig().apiUrl;
const apiInterceptor = axios.create();

export async function getRefreshToken(refreshToken: string) {
    const data = {
        refresh_token: refreshToken,
        grant_type: 'refresh_token',
        client_id: ApiConfig().clientId,
        client_secret: ApiConfig().clientSecret,
    }

    const formData = new FormData();

    Object['entries'](data).forEach((keyValue) =>
        formData.append(keyValue[0], keyValue[1])
    );

    return axios.post(`${ApiConfig().url}o/token/`, formData).then(response => {
        return {
            accessToken: response.data.access_token,
            refreshToken: response.data.refresh_token,
        };
    });

}

apiInterceptor.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = 'Bearer ' + token
        }
        return config
    },
    async function (error) {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            const refreshToken = await AsyncStorage.getItem('refreshToken');
            if (refreshToken) {
                let valid = true;
                getRefreshToken(refreshToken)
                    .then(async (token: any) => {
                        await storeData('accessToken', token.accessToken);
                        await storeData('refreshToken', token.refreshToken);
                    })
                    .catch((error: any) => {
                        console.log(`axios request: ${error}`);
                        valid = false;
                    });
                if (valid) {
                    originalRequest._retry = true;
                    return apiInterceptor(originalRequest);
                }
            }
        }
        return Promise.reject(error);
    }
);

apiInterceptor.interceptors.response.use(
    async config => {
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = 'Bearer ' + token
        }
        return config
    },
    async function (error) {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            const refreshToken = await AsyncStorage.getItem('refreshToken');
            if (refreshToken) {
                let valid = true;

                getRefreshToken(refreshToken)
                    .then(async (token: any) => {
                        await storeData('accessToken', token.accessToken);
                        await storeData('refreshToken', token.refreshToken);
                    })
                    .catch((error: any) => {
                        console.log(`axios response: ${error}`);
                        valid = false;
                    });

                if (valid) {
                    originalRequest._retry = true;
                    return apiInterceptor(originalRequest);
                }
            }
        }
        return Promise.reject(error);
    }
);

export default apiInterceptor