import axios from "axios";
import ApiConfig from "../constants/ApiConfig";
import FormData from 'form-data';
import { UserInterfaceIdiom } from "expo-constants";

export async function login(username: string, password: string,) {
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

export async function signup(firstname: string, lastname: string, email: string, password: string, conpassword: string) {
    const data = {
        grant_type: 'password',
        client_id: ApiConfig().clientId,
        client_secret: ApiConfig().clientSecret,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        conpassword: conpassword
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