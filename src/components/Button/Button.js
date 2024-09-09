import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import styles from './Button.styles';

const Button = ({ text, onPress, loading, buttonType }) => {
 
  const buttonStyle = buttonType === 'signUp' ? styles.signUpButton : styles.loginButton;
  const textStyle = buttonType === 'signUp' ? styles.signUpButtonText : styles.buttonText;

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]} 
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={textStyle}>{text}</Text> 
      )}
    </TouchableOpacity>
  );
};

export default Button;
