import * as React from "react";
import { Alert, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native";
import * as yup from "yup";
import { Formik } from 'formik';
import TextField from "../../../../components/TextInput/TextField";
import { commonColor } from "../../../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { NativeElementButton } from "../../../../components/Button";
import { signup } from "../../../../repository/UserRepository";
import { AlertMessage } from "../../../../utils/AlertMessage";
import { useState } from "react";

interface IProps {
    setLoading: (value: boolean) => void;
}

export default function SignUp(props: IProps) {
    const navigation = useNavigation();

    const [passwordEye, setPasswordEye] = useState<boolean>(true);
    const toggleEye = () => setPasswordEye((previousState) => !previousState);


    const signupSchema = yup.object({
        firstname: yup.string().required('First Name is required'),
        lastname: yup.string().required('Last Name is required'),
        email: yup.string().required('Email is required'),
        password: yup.string().required('Password is required'),
        conpassword: yup.string().required('Please confirm Password'),
    });

    const Separator = () => (
        <View style={styles.separator} />
      );

    const handleSignup = (firstname: string, lastname: string, email: string, password: string, conpassword: string) => {
        props.setLoading(true);
        signup(firstname,lastname, email, password, conpassword)
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
                    firstname:'',
                    lastname:'',
                    email:'',
                    password: '',
                    conpassword: '',
                }}
                validationSchema={signupSchema}
                onSubmit={(values) => {
                    handleSignup(values.firstname, values.lastname, values.email, values.password, values.conpassword,);
                }}
            >
                {({ handleChange, handleSubmit, values, touched, errors }) => (
                    <View style={{ flex: 1, 
                        width: '100%',
                        justifyContent: 'space-around',
                        alignItems: 'flex-end',
                        padding: 10,
                        borderRadius:10,
                        backgroundColor: '#252525', }}>
                        <Text style={{
                              fontSize: 40,
                              padding: 10,
                              color: '#fff',
                              fontFamily: 'space-mono'
                              
                         }}>Sign Up</Text>
                        <TextField
                            style={styles.textFieldStyle}
                            value={values.firstname}
                            placeholder={'First Name'}
                            onChange={handleChange('First Name')}
                            textType={"none"}
                            shadow={true}
                            divider={false}
                            errorMessage={errors.firstname}
                            touched={touched.firstname}
                            containerStyle={{ marginBottom: 20 }}
                        />

                        <TextField
                            style={styles.textFieldStyle}
                            value={values.lastname}
                            placeholder={'Last Name'}
                            onChange={handleChange('Last Name')}
                            textType={"none"}
                            shadow={true}
                            divider={false}
                            errorMessage={errors.lastname}
                            touched={touched.lastname}
                            containerStyle={{ marginBottom: 20 }}
                        />

                        <TextField
                            style={styles.textFieldStyle}
                            value={values.email}
                            placeholder={'Email Address'}
                            onChange={handleChange('Email')}
                            textType={"none"}
                            shadow={true}
                            divider={false}
                            errorMessage={errors.email}
                            touched={touched.email}
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

                        <TextField
                            style={styles.textFieldStyle}
                            value={values.conpassword}
                            iconRightName={passwordEye ? "eye-off-outline" : "eye-outline"}
                            placeholder={'Confirm Password'}
                            iconVisible={true}
                            onPressRightIcon={toggleEye}
                            onChange={handleChange('confirm password')}
                            textType={"password"}
                            secureTextEntry={passwordEye}
                            autofocus={false}
                            shadow={true}
                            divider={false}
                            iconColor={commonColor.main}
                            errorMessage={errors.conpassword}
                            touched={touched.password}
                        />
                        
                        
                        <NativeElementButton
                            title="Sign Up"
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

