import * as React from "react";
import { useEffect, useState } from "react";
import ViewWithLoading from "../../../../components/ViewWithLoading";
import { Alert, StyleSheet, View } from "react-native";

import LoginForm from "./SignUp";

import { NativeElementButton } from "../../../../components/Button";
import axios from "axios";
import HeaderLottie from "../HeaderLottie2";
import FooterLogin from "../FooterLogin";

export default function SignUpScreen() {

    const [loading, setLoading] = useState<boolean>(false);
    return (
        <ViewWithLoading loading={loading}>
            <View style={styles.container}>
                <HeaderLottie />
                <LoginForm
                    setLoading={setLoading}
                />
                
            </View>
        </ViewWithLoading>
    );

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30
    }
})