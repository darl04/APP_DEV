import { View, Text } from 'react-native'
import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <View style={{
      backgroundColor: '#2D1B69', // Dark purple background
      paddingVertical: 20,
      paddingHorizontal: 20,
      marginTop: 20,
      alignItems: 'center',
      borderTopWidth: 2,
      borderTopColor: '#9579a8', 
      borderBottom: 40,// Light purple border
    }}>
      <Text style={{
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
        letterSpacing: 0.5,
      }}>
        Dramatic © {currentYear}. All Rights Reserved.
      </Text>
      <View style={{
        height: 2,
        width: 100,
        backgroundColor: '#9579a8', // Light purple accent line
        marginTop: 10,
        borderRadius: 1,
      }} />
    </View>
  )
}

export default Footer

//Safeareabutton 