import * as React from "react";
import { useEffect, useState } from "react";
import ViewWithLoading from "../../../components/ViewWithLoading";
import { Alert, StyleSheet, View } from "react-native";
import HeaderLottie from "./HeaderLottie";
import LoginForm from "./LoginForm";
import FooterLogin from "./FooterLogin";
import { NativeElementButton } from "../../../components/Button";
import axios from "axios";

export default function LoginScreen() {

    const [loading, setLoading] = useState<boolean>(false);

    return (
        <ViewWithLoading loading={loading}>
            <View style={styles.container}>
                <HeaderLottie />
                <LoginForm
                    setLoading={setLoading}
                />
                <FooterLogin />
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