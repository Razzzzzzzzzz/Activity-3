import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { Platform, StyleSheet, View, Text } from 'react-native';

export default function FeedScreen() {
    return (
        <View style={styles.container}>
            <Text>Modal</Text>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
