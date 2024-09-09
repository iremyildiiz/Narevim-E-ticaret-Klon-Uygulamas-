import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // İkon kütüphanesinden ikonları ekleyin
import { useDispatch } from 'react-redux';
import { changePasswordProcess } from '../Api/api'; // Doğru yolda import ettiğinizden emin olun

const ChangePassword = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const dispatch = useDispatch();

  const handleChangePassword = () => {
    if (!currentPassword || !newPassword) {
      Alert.alert('Eksik Bilgi', 'Lütfen mevcut ve yeni şifrenizi girin.');
      return;
    }
    dispatch(changePasswordProcess({ currentPassword, newPassword }))
      .unwrap()
      .then(() => {
        Alert.alert('Başarılı', 'Şifreniz başarıyla değiştirildi.');
        navigation.goBack(); // İşlem başarılıysa geri dön
      })
      .catch((error) => {
        Alert.alert('Hata', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          style={styles.logo}
          source={require('../assets/logo.png')} // Logo dosyasının doğru yolunu belirleyin
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="account-key-outline" size={25} color="#DE3459" style={styles.icon} />
        <TextInput 
          style={styles.input}
          secureTextEntry
          placeholder="Eski şifrenizi girin"
          value={currentPassword}
          onChangeText={setCurrentPassword}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="account-key" size={25} color="#DE3459" style={styles.icon} />
        <TextInput 
          style={styles.input}
          secureTextEntry
          placeholder="Yeni şifrenizi girin"
          value={newPassword}
          onChangeText={setNewPassword}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Şifreyi Değiştir</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  icon: {
    marginRight: 10,
    alignSelf: 'center', // İkonun dikeyde ortalanmasını sağlar
  },
  logo: {
    width: 300, 
    height: 105, 
    tintColor:'#DE3459',
    marginBottom:50,
    paddingBottom:30,
  },
  inputContainer: {
    marginBottom: 20,
    flexDirection:'row'
  },
  input: {
    height: 60,
    width:300,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#DE3459',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default ChangePassword;
