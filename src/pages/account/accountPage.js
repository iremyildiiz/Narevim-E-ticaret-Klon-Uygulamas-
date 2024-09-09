import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutProcess } from '../../Api/api';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './accountPage.style';
import Icon from 'react-native-vector-icons/Entypo'
import Iconn from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/FontAwesome'
import Iconmat from 'react-native-vector-icons/MaterialCommunityIcons'
import Iconlog from 'react-native-vector-icons/AntDesign'
import Iconuser from 'react-native-vector-icons/FontAwesome5'
import Iconi from 'react-native-vector-icons/Ionicons'

const AccountPage = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logoutProcess()).unwrap(); // Çıkış işlemini tetikleyin
      console.log('Çıkış Yapıldı');
      navigation.navigate('Login'); // Çıkış başarılıysa Login sayfasına yönlendirin
    } catch (error) {
      console.log('Çıkış işlemi sırasında bir hata oluştu:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
       <Iconi name="arrow-back" size={25} color="#DE3459" />
      </TouchableOpacity>
  </View>

      <View style={styles.logoContainer}>
        <Image 
          style={styles.logo}
          source={require('../../assets/logo.png')} // Logonun doğru yolu
        />
      </View>
      
      <View style={styles.menuContainer}>
        <TouchableOpacity 
        style={styles.menuItem}
        onPress={() => navigation.navigate('Orders')}>
          <Icon name="back-in-time" size={25} color="black" />
          <Text style={styles.menuItemText}>Siparişlerim</Text>
          <Iconi name="arrow-forward-circle-outline" size={25} color="black"  style={styles.icon}  />

        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.menuItem} 
        onPress={() => navigation.navigate('Favorites')}>
        <Iconn name="favorite" size={25} color="black" />
          <Text style={styles.menuItemText}>Favorilerim</Text>
          <Iconi name="arrow-forward-circle-outline" size={25} color="black"  style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.menuItem} 
        onPress={() => navigation.navigate('Adres')}>
        <Icons name="map-marker" size={25} color="black" />
         <Text style={styles.menuItemText}>Adreslerim</Text>
         <Iconi name="arrow-forward-circle-outline" size={25} color="black"   style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.menuItem} 
        onPress={() => navigation.navigate('UserInfo')}>
         <Iconuser name="user-edit" size={20} color="black" />
          <Text style={styles.menuItemText}>Kullanıcı Bilgilerim</Text>
          <Iconi name="arrow-forward-circle-outline" size={25} color="black"   style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.menuItem} 
        onPress={() => navigation.navigate('ChangePassword')}>
        <Iconmat name="key-change" size={25} color="black" />
         <Text style={styles.menuItemText}>Şifre Değiştir</Text>
         <Iconi name="arrow-forward-circle-outline" size={25} color="black"  style={styles.icon} />
        </TouchableOpacity>


        <TouchableOpacity 
        style={styles.menuItem} 
        onPress={handleLogout}>
          <Iconlog name="login" size={25} color="black" />
          <Text style={styles.menuItemText}>Çıkış Yap</Text>
          <Iconi name="arrow-forward-circle-outline" size={25} color="black"   style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountPage;
