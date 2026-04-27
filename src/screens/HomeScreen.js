import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { IMG, ROUTES } from '../utils';
import Footer from '../components/Footer';
import CustomButton2 from '../components/CustomButton2';
import { useDispatch } from 'react-redux';
import { resetLogin } from '../app/reducers/auth';
import { ScrollView } from 'react-native-gesture-handler';



const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={IMG.LOGO}
          resizeMode="contain"
          style={{
            width: 200,
            height: 200,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            dispatch(resetLogin());
          }}
        >
          <View
            style={{
              padding: 20,
              backgroundColor: 'purple',
              borderRadius: 20,
            }}
          >
            <Text style={{ fontSize: 10, color: 'white' }}>LOGOUT</Text>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'column', marginBottom: 10 }}>
          <Image
            source={IMG.COSTUME1}
            resizeMode="contain"
            style={{
              width: 200,
              height: 200,
            }}
          />
          <Image
            source={IMG.COSTUME2}
            resizeMode="contain"
            style={{
              width: 200,
              height: 200,
            }}
          />
          <Image
            source={IMG.COSTUME1}
            resizeMode="contain"
            style={{
              width: 200,
              height: 200,
            }}
          />
          <Image
            source={IMG.COSTUME2}
            resizeMode="contain"
            style={{
              width: 200,
              height: 200,
            }}
          />
          <CustomButton2
            label= "ProfileScreen"
            buttonLabel="Profile"
            navigateTo={ROUTES.PROFILE}
            buttonTextColor='#0000'
            buttonBackgroundColor='white'
            backgroundColor='purple'
          >

          </CustomButton2>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default HomeScreen;

//dynamic must style in homescreen