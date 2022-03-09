import * as React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandingScreen, LoginScreen } from '../../screens/NonAuth';
import { NonAuthParamList } from '../../types';

const Stack = createNativeStackNavigator<NonAuthParamList>();

export default function NonAuthNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="Landing"
                component={LandingScreen}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
            />
        </Stack.Navigator>
    );
}