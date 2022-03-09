import axios from "axios";
import ApiConfig from "../constants/ApiConfig";
import FormData from 'form-data';

export async function login(username: string, password: string) {
    const data = {
        grant_type: 'password',
        client_id: ApiConfig().clientId,
        client_secret: ApiConfig().clientSecret,
        username: username,
        password: password,
    }

    const formData = new FormData();

    Object['entries'](data).forEach((keyValue) =>
        formData.append(keyValue[0], keyValue[1])
    );

    return axios.post(`${ApiConfig().url}o/token/`, data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then(response => {
            return {
                accessToken: response.data.access_token,
                refreshToken: response.data.refresh_token,
            };
        })
        .catch((error: any) => {
            throw error;
        });

}