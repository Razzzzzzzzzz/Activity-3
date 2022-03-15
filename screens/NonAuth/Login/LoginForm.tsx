import * as React from "react";
import { Alert, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native";
import * as yup from "yup";
import { Formik } from 'formik';
import TextField from "../../../components/TextInput/TextField";
import { commonColor } from "../../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { NativeElementButton } from "../../../components/Button";
import { login } from "../../../repository/UserRepository";
import { AlertMessage } from "../../../utils/AlertMessage";
import { useState } from "react";

interface IProps {
    setLoading: (value: boolean) => void;
}

export default function LoginForm(props: IProps) {
    const navigation = useNavigation();

    const [passwordEye, setPasswordEye] = useState<boolean>(true);
    const toggleEye = () => setPasswordEye((previousState) => !previousState);


    const loginSchema = yup.object({
        username: yup.string().required('Username is required'),
        password: yup.string().required('Password is required'),
    });

    const Separator = () => (
        <View style={styles.separator} />
      );

    const handleLogin = (username: string, password: string) => {
        props.setLoading(true);
        login(username, password)
            .then((data: {
                accessToken: string,
                refreshToken: string,
            }) => {
                console.log(data.accessToken, data.refreshToken);
            })
            .catch((error: any) => {
                console.log(error.response);
                AlertMessage(error);
            })
            .finally(() => {
                props.setLoading(false);
            })
    }

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                validationSchema={loginSchema}
                onSubmit={(values, actions) => {
                    handleLogin(values.username, values.password);
                }}
            >
                {({ handleChange, handleSubmit, values, touched, errors }) => (
                    <View style={{ flex: 1, 
                        width: '100%', 
                        justifyContent: 'space-around',
                        alignItems: 'flex-end',
                        borderRadius:10,
                        padding: 10,
                        backgroundColor: '#252525', 
                        }}>
                            <Text style={{
                              fontSize: 40,
                              padding: 10,
                              color: '#fff',
                              fontFamily: 'space-mono'
                            }}>Log In</Text>
                        <TextField
                            style={styles.textFieldStyle}
                            value={values.username}
                            placeholder={'Username'}
                            onChange={handleChange('username')}
                            textType={"none"}
                            shadow={true}
                            divider={false}
                            errorMessage={errors.username}
                            touched={touched.username}
                            containerStyle={{ marginBottom: 20 }}
                        />

                        <TextField
                            style={styles.textFieldStyle}
                            value={values.password}
                            iconRightName={passwordEye ? "eye-off-outline" : "eye-outline"}
                            placeholder={'Password'}
                            iconVisible={true}
                            onPressRightIcon={toggleEye}
                            onChange={handleChange('password')}
                            textType={"password"}
                            secureTextEntry={passwordEye}
                            autofocus={false}
                            shadow={true}
                            divider={false}
                            iconColor={commonColor.main}
                            errorMessage={errors.password}
                            touched={touched.password}
                        />
                        <TouchableOpacity
                            onPress={() => navigation.navigate("ForgotPassword")}
                            style={{ alignSelf: 'flex-end' }}
                        >
                            <Text style={[styles.forgotTextStyle, { color: commonColor.secondary }]}>Forgot Password?</Text>
                        </TouchableOpacity>
                        <NativeElementButton
                            title="Log In"
                            onPress={handleSubmit}
                            containerStyle={{ width: '90%', alignSelf: 'center', marginTop: 20 }}
                        />
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',

    },
    forgotTextStyle: {
        fontSize: 14
    },
    textFieldStyle: {
        flex: 0,
        height: 45,
        paddingVertical: 10,
        borderRadius: 10,
        paddingRight: 5
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
});

