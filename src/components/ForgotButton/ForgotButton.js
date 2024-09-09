import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ForgotPasswordButton = ({ text,onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text> 
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 2,
    alignItems:'flex-end'
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'normal',
  },
});

export default ForgotPasswordButton;
