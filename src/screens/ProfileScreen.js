import { Image, Text, View } from 'react-native';
import { IMG } from '../utils';

const ProfileScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'blue',
        borderWidth: 3,
      }}
    >
      <Image
<<<<<<< HEAD
        source={IMG.LOGO}
        resizeMode="contain"
          style={{
            width: 200,
            height: 200,
=======
        source={{
          uri: IMG.LOGO,
        }}
        style={{
          width: 200,
          height: 200,
>>>>>>> origin/main
        }}
      />
      <Text>ProfileScreen</Text>
    </View>
  );
};

<<<<<<< HEAD
export default ProfileScreen;
=======
export default ProfileScreen;
>>>>>>> origin/main
