import React, { useState } from 'react';
import { SafeAreaView, View, Alert,Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { lostPasswordProcess } from '../../../Api/api';
import { Input,Button } from '../../../components';
import styles from '../ForgotPassword.styles';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleResetPassword = () => {
    if (!email) {
      Alert.alert( 'Lütfen e-posta adresinizi girin.');
      return;
    }
    dispatch(lostPasswordProcess(email))
      .unwrap()
      .then(() => {
        Alert.alert('Başarılı', 'Şifrenizi sıfırlamak için e-posta gönderildi.');
        navigation.goBack(); // Başarılı işlemden sonra giriş sayfasına geri dönüyoruz
      })
      .catch((error) => {
        Alert.alert('Hata',error.message || 'Kullanıcı Bulunamadı !' );
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
      <Image 
        style={styles.logo_container}
        source={require('/Users/iremyildiz/narevim/src/assets/logo.png')}
        />

        <Input
          placeholder="E-Posta"
          keyboardType="email-address"
          iconName="account"
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.buttonSpacing}>
          <Button
            text="Şifreyi Sıfırla"
            onPress={handleResetPassword}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
