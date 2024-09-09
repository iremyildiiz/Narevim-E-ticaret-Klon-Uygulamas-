import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import input_styles from './input.styles';




const Input = ({ placeholder, onChangeText, value, iconName, isSecure }) => {
  return (
    <View style={input_styles.inputContainer}>
      {iconName && (
        <View style={input_styles.icon}>
          <Icon name={iconName} size={25} color="#dc0155" />
        </View>
      )}
      <TextInput 
        style={input_styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={isSecure}
        placeholderTextColor="gray"
      />
    </View>
  );
};

export default Input;
