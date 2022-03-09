import * as React from "react";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { Button } from "react-native-elements";
import ViewWithLoading from "../../components/ViewWithLoading";
import { commonColor } from "../../constants/Colors";
import LottieView from 'lottie-react-native';
import { useNavigation } from "@react-navigation/native";


export default function LandingScreen() {
    const navigation = useNavigation();
    const [isRegister, setIsRegister] = useState<boolean>(true);

    return (
        <ViewWithLoading loading={false}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <LottieView
                        source={require('../../assets/lottie/arcade.json')}
                        autoPlay={true}
                        loop={true}
                    />
                </View >

                <View style={{
                    height: '70%',
                    width: '100%',
                }}>
                <View style={styles.textContainer}>
                <Image
            source={{ uri: 'https://cdn.fbsbx.com/v/t59.2708-21/275577547_377634654208138_4495075551550250228_n.gif?_nc_cat=110&ccb=1-5&_nc_sid=041f46&_nc_eui2=AeFvnYrH1PuNIrQ-BfBMMa3Fxu-w0pNIa0bG77DSk0hrRk9h5aZE9lOpXB-wIhpPMPswG-SE00o4zXacA0w2ZUy7&_nc_ohc=Y4MHBlXGT9IAX-JOIx8&_nc_ht=cdn.fbsbx.com&oh=03_AVKcIZKcIl7fDazv2v2dbbnwxBWMMDPE0Qxnu7fsccfRcQ&oe=622A1A4B' }}
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'repeat',
            }}
          />
          <Image
            source={{ uri: 'https://cdn.fbsbx.com/v/t59.2708-21/275237124_1211045409425734_7554122983659526869_n.gif?_nc_cat=100&ccb=1-5&_nc_sid=041f46&_nc_eui2=AeFp08AOmF44LgWA7q1AM6fx6ENppQ0oALroQ2mlDSgAulOrXKIrB79L2Ozyh-Zh2zCiGBA7zHOfXb5E6qxJzStj&_nc_ohc=zTLPk-k2uD0AX-9-eu4&tn=GkiLqppi1SZNDuqB&_nc_ht=cdn.fbsbx.com&oh=03_AVJarA4JTDBKvR4qA8JgZGOEFgAR-6ybIwYDCYL_l9yKrg&oe=622A65E3' }}
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'center',
            }}
          />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.btnInnerContainer}>
                        
                        <Button
                            title={'Key'}
                            buttonStyle={{
                                backgroundColor: !isRegister ? commonColor.black : '#000',
                                borderRadius: 10,
                                padding: 15,
                                paddingHorizontal: 30,
                                
                            }}
                            onPress={() => {
                                setIsRegister(false);
                                navigation.navigate("Login");
                            }}
                            titleStyle={{
                                color: !isRegister ? '#3B3A41' : commonColor.white
                            }}
                        />
                    </View>
                </View>
                </View>
            </View>
        </ViewWithLoading>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: commonColor.black
    },
    imageContainer: {
        flex: 1
    },
    textContainer: {
        flex: 1,
        padding: 20,
    },
    buttonContainer: {
        flex: 3,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnInnerContainer: {
        flex: 0,
        flexDirection: 'row',
        backgroundColor: '#3B3A41',
        borderRadius: 10
        
    },
    baseText: {
        color: commonColor.white,
        textAlign: 'center',
    }
})