<<<<<<< HEAD
import {
  ActivityIndicator,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const CustomButton = ({
  containerStyle,
  label,
  textStyle,
  onPress,
  loading,
}) => {
  const { width, height } = Dimensions.get('window');

  return (
    <>
      {loading ? (
        <View className="h-20 p-4">
          <ActivityIndicator size={'large'} color={'purple'} />
        </View>
      ) : (
        <View style={containerStyle}>
          <TouchableOpacity onPress={onPress}>
            <View style={{ padding: width * 0.014 }}>   
              <Text style={textStyle}>{label}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default CustomButton;
=======
import { Text, TouchableOpacity, View } from 'react-native';

const CustomButton = ({ label, onPress }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          margin: 10,
          backgroundColor: 'blue',
          borderRadius: 10,
        }}
      >
        <View style={{ padding: 10 }}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
            }}
          >
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
>>>>>>> origin/main
