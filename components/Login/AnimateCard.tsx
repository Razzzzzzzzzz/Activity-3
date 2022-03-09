import * as React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from 'lottie-react-native';


export default function AnimateCard() {
    return (
        <View style={styles.container}>
            <LottieView
                style={{ flex: 1, }}
                source={require('../../assets/lottie/44376-3d-gamepad-animation.json')}
                autoPlay
                loop
                resizeMode="cover"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});