import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconn from 'react-native-vector-icons/MaterialIcons';

const UserProfileScreen = () => {
  const user = useSelector(state => state.auth.data); // Kullanıcı bilgilerini Redux state'inden alın

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileBox}>
          <Icon name='user-circle-o' size={30} color="#DE3459" style={styles.icon} />
          <View style={styles.infoContainer}>
            <Text style={styles.label}>İsim Soyisim:</Text>
            <Text style={styles.value}>{user.name || 'Bilinmiyor'}</Text>
          </View>
        </View>

        <View style={styles.profileBox}>
          <Iconn name='email' size={30} color="#DE3459" style={styles.icon} />
          <View style={styles.infoContainer}>
            <Text style={styles.label}>E-Posta:</Text>
            <Text style={styles.value}>{user.email || 'Bilinmiyor'}</Text>
          </View>
        </View>

        <View style={styles.profileBox}>
          <Icon name='phone' size={30} color="#DE3459" style={styles.icon} />
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Telefon Numarası:</Text>
            <Text style={styles.value}>{user.telephone || 'Bilinmiyor'}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white', // Arka plan rengini belirleyin
  },
  profileContainer: {
    marginVertical: 20,
  },
  profileBox: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: 'white', // Kutu arka plan rengi
    borderRadius: 8,
    shadowColor: '#000000', // Gölge rengi
    shadowOffset: { width: 0, height: 2 }, // Gölge ofseti
    shadowOpacity: 0.1, // Gölge opaklığı
    shadowRadius: 4, // Gölge yarıçapı
    elevation: 2, // Android için gölge efekti
    flexDirection: 'row', // Yazılar ve bilgiler yan yana yerleştirilecek
    alignItems: 'center', // Icon'lar ve bilgi metinlerinin ortalanması
  },
  icon: {
    marginRight: 19, // Icon ile bilgi metni arasına boşluk ekler
  },
  infoContainer: {
    flex: 1, // Bilgi metinlerinin genişliğini kontrol eder
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4, // Etiket ve değer arasına boşluk ekler
    fontSize: 14,
    color: '#DE3459', // Etiket rengi
  },
  value: {
    fontSize: 16,
    color: '#333333', // Bilgi metin rengi
  },
});

export default UserProfileScreen;
