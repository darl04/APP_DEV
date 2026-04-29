<<<<<<< HEAD
import { Dimensions, Text, View } from 'react-native';
=======
import { Text, View } from 'react-native';
>>>>>>> origin/main
import { TextInput } from 'react-native-gesture-handler';

const CustomTextInput = ({
  placeholder,
  label,
  labelStyle,
  value,
<<<<<<< HEAD
  onChangeText,
  containerStyle,
  textStyle,
}) => {
  const { width, height } = Dimensions.get('window');

=======
  containerStyle,
  textStyle,
}) => {
>>>>>>> origin/main
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
<<<<<<< HEAD
        placeholderTextColor="#9579a8"
        value={value}
        onChangeText={onChangeText}
        style={[
          textStyle,
          {
            width: width * 0.9,
=======
        onChangeText={value}
        style={[
          textStyle,
          {
            width: '80%',
>>>>>>> origin/main
            borderBottomWidth: 1,
          },
        ]}
      />
    </View>
  );
};

<<<<<<< HEAD
export default CustomTextInput;
=======
export default CustomTextInput;
>>>>>>> origin/main
