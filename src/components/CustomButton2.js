import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from './CustomButton';

const CustomButton2 = ({
  label,
  buttonLabel,
  navigateTo,
  onPress,
  backgroundColor,
  labelColor,
  buttonBackgroundColor,
  buttonTextColor,
  containerStyle,
  buttonContainerStyle,
  labelStyle,
  buttonTextStyle,
  loading,
}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else if (navigateTo) {
      navigation.navigate(navigateTo);
    }
  };

  const dynamicCardStyle = {
    ...styles.card,
    backgroundColor,
    ...containerStyle,
  };

  const dynamicLabelStyle = {
    ...styles.label,
    color: labelColor,
    ...labelStyle,
  };

  const dynamicButtonStyle = {
    ...styles.button,
    backgroundColor: buttonBackgroundColor,
    ...buttonContainerStyle,
  };

  const dynamicButtonTextStyle = {
    ...styles.buttonText,
    color: buttonTextColor,
    ...buttonTextStyle,
  };

  return (
    <View style={dynamicCardStyle}>
      <Text style={dynamicLabelStyle}>{label}</Text>

      <CustomButton
        label={buttonLabel}
        onPress={handlePress}
        containerStyle={dynamicButtonStyle}
        textStyle={dynamicButtonTextStyle}
        loading={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  button: {
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CustomButton2;