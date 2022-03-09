import * as React from "react";
import { Alert } from "react-native";

export const AlertMessage = (error: any) => {
    let error_message = '';

    if (error.response) {
        error_message = error.response.data.error_message;
    } else if (error.request) {
        error_message = "Sorry something went wrong, Please make sure you are connected to the internet";
    } else {
        error_message = "Something went wrong";
    }

    if (error_message !== "") Alert.alert("Blog", error_message);
}