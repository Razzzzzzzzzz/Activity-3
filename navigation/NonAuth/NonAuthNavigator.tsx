import * as React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandingScreen, LoginScreen } from '../../screens/NonAuth';
import { NonAuthParamList } from '../../types';
import SignUpScreen from "../../screens/NonAuth/Login/SignUp/SignupScreen";
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
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
            />
        </Stack.Navigator>
    );
}