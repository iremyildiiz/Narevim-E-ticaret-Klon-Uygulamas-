import React, { useState,useEffect } from 'react';
import { SafeAreaView, View,Image,Alert} from 'react-native';
import styles from './login.styles';
import { Button,Input,ForgotButton } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { loginProcess,lostPasswordProcess } from '../../Api/api';
import { checkSignedIn } from '../../redux/slice/authSlice';
import ForgotPassword from './accountPage/ForgotPassword';


const Login = ({navigation}) => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const dispatch = useDispatch();

  const {isloading ,errorMessage,isSignedIn} = useSelector(state => state.auth);
  
  useEffect(() => {
    if (isSignedIn === '1') {
      navigation.navigate('AccounStack');
    } else if (isSignedIn === '0' && errorMessage) {
      Alert.alert('Giriş Hatası', errorMessage); // Hata mesajını göster
    }
  }, [isSignedIn, errorMessage]);


  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Eksik Bilgi', 'Lütfen e-posta ve şifrenizi girin.'); // Kullanıcıyı bilgilendir
      return;
    }
    dispatch(loginProcess({ email, password }))
      .unwrap()
      .then(() => {
        dispatch(checkSignedIn('1')); // Giriş başarılıysa kullanıcıyı signed in olarak işaretle
      })
      .catch(() => {
        dispatch(checkSignedIn('0')); // Giriş başarısızsa kullanıcıyı signed out olarak işaretle
      });


  };

  const handleSignUp = () => {
   navigation.navigate('SignUp');
  };

  const handleForgotPassword = () => {
    navigation.navigate('AuthStack', { screen: 'ForgotPassword' });
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Image 
        style={styles.logo_container}
        source={require('../../assets/logo.png')}/>
        <Input
          placeholder="E-Posta"
          keyboardType="email-address"
          iconName="account"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Şifre"
          secureTextEntry
          iconName="key"
          isSecure
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.buttonSpacing}>
          <Button
            text="Giriş Yap"
            onPress={handleLogin}
            buttonType="login"
            isLoading={isloading} 
          />
        </View>
        <View style={styles.buttonSpacing}>
          <Button
            text="Kayıt Ol"
            onPress={handleSignUp}
            buttonType="signUp"
          />
        </View>
        <View>
          <ForgotButton
          text="Şifremi Unuttum"
          onPress={handleForgotPassword}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
