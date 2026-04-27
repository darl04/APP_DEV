import { useState, useEffect } from 'react';
import { Alert, Text, TouchableOpacity, View, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import { ROUTES, IMG } from '../../utils';

import { useDispatch, useSelector } from 'react-redux';
import { userLogin, resetLogin } from '../../app/reducers/auth';

const Login = () => {
  // GETTER //SETTER
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { isLoading, isError, errorMessage } = useSelector(state => state.auth);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  // Reset login state when component mounts
  useEffect(() => {
    dispatch(resetLogin());
  }, [dispatch]);

  //   useEffect(() => {}, [studentID, password]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={IMG.LOGO}
        resizeMode="contain"
        style={{
          width: 200,
          height: 200,
        }}
      />
      {/* <Text style={{ color: 'black' }}>{username}</Text>
      <Text style={{ color: 'black' }}>{password}</Text> */}

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <CustomTextInput
          label={'Username'}
          placeholder={'Enter your username'}
          value={username}
          onChangeText={setUsername}
          containerStyle={{
            width: '100%',
            marginBottom: 15,
          }}
          labelStyle={{
            color: 'purple',
            fontSize: 20,
            fontWeight: '500',
          }}
          textStyle={{
            color: 'black',
            fontSize: 20,
          }}
        />

        <CustomTextInput
          label={'Password'}
          placeholder={'Password'}
          value={password}
          onChangeText={setPassword}
          containerStyle={{
            width: '100%',
          }}
          labelStyle={{
            color: 'purple',
            fontSize: 20,
            fontWeight: '500',
          }}
          textStyle={{
            color: 'black',
            fontSize: 20,
          }}
        />
      </View>

      {isError && errorMessage && (
        <Text style={{ color: 'red', marginVertical: 10, textAlign: 'center' }}>
          {errorMessage}
        </Text>
      )}

      <CustomButton
        label={'LOGIN'}
        containerStyle={{
          marginVertical: 20,
          width: '80%',
          backgroundColor: 'purple',
          borderRadius: 12,
        }}
        textStyle={{
          color: '#ffffff',
          textAlign: 'center',
          fontWeight: '800',
          fontSize: 20,
        }}
        loading={isLoading}
        onPress={async () => {
          // await userLogin({
          //   student_id: studentID,
          //   password: password,
          // });

          dispatch(
            userLogin({
              username: username,
              password: password,
            }),
          );
        }}
      />

      <View style={{ flexDirection: 'row' }}>
        <Text>Not register yet?</Text>
        <TouchableOpacity
          style={{ marginLeft: 5 }}
          onPress={() => navigation.navigate(ROUTES.REGISTER)}
        >
          <Text style={{ color: 'purple', fontWeight: '800' }}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
