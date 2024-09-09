
import React,{useState} from 'react';
import { SafeAreaView, View, Text,Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { registerProcess } from '../../Api/api';
import styles from './SignUp.styles'; 
import { Button,Input } from '../../components';
import input_styles from '../../components/Input/input.styles'
import button_styles from '../../components/Button/Button.styles';
                   


const SignUpScreen = () => {
  const dispatch = useDispatch(); 
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
   

    try {
      const resultAction = await dispatch(registerProcess({ name,  phone, email, password }));
      if (registerProcess.fulfilled.match(resultAction)) {
        Alert.alert('Başarılı', 'Kayıt başarılı!');
      } else {
        Alert.alert('Hata', 'Kayıt işlemi başarısız.');
      }
    } catch (error) {
      Alert.alert('Hata', 'Bir hata oluştu.');
    }
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
       <View style={styles.firstBlock}>
        <Text style={styles.sectionTitle}>İletişim Bilgileri</Text>
        <Input 
        
          placeholder="Ad"
          iconName="account"
           style={input_styles.input}
           value={name}
            onChangeText={setName}
        />
       
        <Input
          placeholder="Telefon Numarası"
          keyboardType="phone-pad"
          iconName="phone"
          style={input_styles.inputNum}
          value={phone}
          onChangeText={setPhone}
        />
       </View>

        <View style={styles.secondBlock}>
          <Text style={styles.sectionTitle}>E-Posta & Şifre</Text>
          <Input
            placeholder="E-Posta"
            keyboardType="email-address"
            iconName="email"
            style={input_styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <Input
            placeholder="Şifre"
            secureTextEntry
            iconName="key"
            isSecure
            style={input_styles.input}
            value={password}
            onChangeText={setPassword}
           />

         <View style={styles.buttonSpacing}>
            <Button
             text="Kaydet"
             onPress={handleSignUp}
             buttonType="register"
             style={button_styles.button}
            />
         </View>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
