import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'flex-end',
      padding: 10,
      backgroundColor: '#5865f2',
      
    }}>
      <Image
            source={{ uri: 'https://cdn.fbsbx.com/v/t59.2708-21/275051143_309144347871760_7878033595957385213_n.gif?_nc_cat=103&ccb=1-5&_nc_sid=041f46&_nc_eui2=AeGz_twrL785g8zTN1N-JrMii9JyrlIahYGL0nKuUhqFgRTVgR4f5h9sC1w6F7N_x03u6TLlWjMHjoD2WByOEIRS&_nc_ohc=J3pilaBqjrQAX8p_nZK&_nc_ht=cdn.fbsbx.com&oh=03_AVKQ5txOPlCgB1d7lD15W5MiD0ecA49HJilTWxbg31szQA&oe=62237EB7' }}
            style={{
              height: '30%',
              width: '100%',
              resizeMode: 'center',
            }}
          />
      <View style={{
        height: '60%',
        width: '100%',
        borderRadius: 15,
        backgroundColor: '#E7EEF1',
        overflow: 'hidden',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'column'
        }}>

        <View style={{ flex: 0, marginVertical: 20, padding: 10, backgroundColor: '#E7EEF1' }}>
          <Text style={{
            fontSize: 25,
            color: '#525454',
            fontFamily: 'poppins-semi-bold'
          }}>Welcome to BitSlice</Text>
        </View>

        <View style={{ flex: 0, borderRadius: 5, marginVertical: 0, padding: 10,  }}>
          <Text style={{
            fontSize: 20,
            color: '#525454',
            fontFamily: 'poppins-thin'
          }}>E-mail/Username</Text>
        </View>

        <View style={{ 
            height: '15%',
            width: '100%',
            borderRadius: 10,
            backgroundColor: '#E7EEF1',
            overflow: 'hidden',
            padding: 5,
            flexDirection: 'row' 
            }}>
              
        <View style={{ flex: 10, borderRadius: 5, marginVertical: 10, padding: 10 }}>
          <Text style={{
            fontSize: 20,
            color: '#525454',
            fontFamily: 'poppins-thin'
          }}>Password</Text>
        </View>

        <View style={{ flex: 1, borderRadius: 5, marginVertical: 10, }}>
        <Image
            source={{ uri: 'https://icons.veryicon.com/png/o/miscellaneous/hekr/action-hide-password.png' }}
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'contain',
            }}
          />
          </View>
        </View>

          <View style={{ 
            height: '20%',
            width: '100%',
            borderRadius: 10,
            backgroundColor: '#E7EEF1',
            overflow: 'hidden',
            padding: 10,
            flexDirection: 'row' 
            }}>

          <View style={{ 
            flex: 1, 
            borderRadius: 10, 
            marginVertical: 10, 
            marginHorizontal: 10, 
            paddingTop: 10, 
            shadowColor: '#000',
            shadowOffset: {
             width: 0,
             height: 2,
             },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            }}>

           <Text style={{
              fontSize: 20,
              textAlign: 'center',
              color: '#525454',
              fontFamily: 'poppins-regular'
            }}>Sign Up</Text>
          </View>

          <View style={{ flex: 1, 
            borderRadius: 10, 
            marginVertical: 10, 
            marginHorizontal: 10, 
            paddingTop: 10,
            backgroundColor: '#5865f2',
            shadowColor: '#000',
            shadowOffset: {
             width: 0,
             height: 2,
             },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            }}>

            <Text style={{
              fontSize: 20,
              textAlign: 'center',
              color: '#E7EEF1',
              fontFamily: 'poppins-regular'
            }}> Log In </Text>
          </View>
        </View>

        <View style={{ flex: 0, padding: 10, backgroundColor: '#E7EEF1'}}>
          <Text style={{
            fontSize: 18,
            color: '#999B9B',
            fontFamily: 'poppins-regular',
            textAlign: 'center',
          }}>
            -or continue with-
          </Text>
          </View>

          <View style={{ flex: 1,
            paddingBottom: 25, 
            backgroundColor: '#E7EEF1',
            flexDirection: 'row'  }}>

             <View style={{ 
             flex: 0, 
             borderRadius: 10, 
             marginHorizontal: 5, 
             padding: 10, 
             paddingTop:15, 
             shadowColor: '#000',
             shadowOffset: {
              width: 0,
              height: 2,
              },
             shadowOpacity: 0.25,
             shadowRadius: 3.84,
             elevation: 5, }}>
             <Image
               source={{ uri: 'https://freesvg.org/img/1534129544.png' }}
               style={{
               height: '50%',
               width: '100%',
               resizeMode: 'contain',
             }}
             />
          <Text style={{
            fontSize: 20,
            textAlign: 'center',
            color: '#525454',
            fontFamily: 'poppins-regular'
          }}> Google </Text>
        </View>
        <View style={{ 
             flex: 0, 
             borderRadius: 10, 
             marginHorizontal: 5, 
             padding: 10, 
             paddingTop:15,
             shadowColor: '#000',
             shadowOffset: {
             width: 0,
             height: 2,
             },
             shadowOpacity: 0.25,
             shadowRadius: 3.84,
             elevation: 5,  }}>
        <Image
            source={{ uri: 'https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png' }}
            style={{
              height: '50%',
              width: '100%',
              resizeMode: 'contain',
            }}
          />
          <Text style={{
            fontSize: 20,
            textAlign: 'center',
            color: '#525454',
            fontFamily: 'poppins-regular'
          }}>Facebook</Text>
        </View>

        <View style={{ 
             flex: 0, 
             borderRadius: 10, 
             marginHorizontal: 5, 
             padding: 10, 
             paddingTop:15,
             shadowColor: '#000',
             shadowOffset: {
              width: 0,
              height: 2,
              },
             shadowOpacity: 0.25,
             shadowRadius: 3.84,
             elevation: 5,  }}>
        <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/814px-Apple_logo_black.svg.png' }}
            style={{
              height: '50%',
              width: '100%',
              resizeMode: 'contain',
            }}
          />
          <Text style={{
            fontSize: 20,
            textAlign: 'center',
            color: '#525454',
            fontFamily: 'poppins-regular'
          }}>  Apple   </Text>
        </View>
      </View>
      </View>
    </View>
  );
}
