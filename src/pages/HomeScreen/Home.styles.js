import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // Ana kapsayıcı görünüm
    flex: 1, // Yükseklik ve genişlik için tam alanı kaplar
    backgroundColor: 'white', // Arka plan rengi
  },
  itemContainer: {
    // Slider resimlerinin kapsayıcı görünümü
    marginBottom: 5, // Altında boşluk bırakır
  },
  logo: {
    // Uygulama logosu
    width: 290, // Logo genişliği
    height: 70, // Logo yüksekliği
    resizeMode: 'contain', // Logonun içeriğini bozmadan kapsayıcıya uydurur
    tintColor: '#DE3459', // Renk filtresi uygular
    left: 30, // Sol boşluk
    marginBottom: 15, // Alt boşluk
  },
  searchBarContainer: {
    // Arama çubuğunun kapsayıcı görünümü
    flexDirection: 'row', // Yatayda sıralar
    alignItems: 'center', // Ortalar
    marginHorizontal: 10, // Yatay boşluk
    marginBottom: 10, // Alt boşluk
  },
  searchBar: {
    flex: 1, // Kapsayıcı alanın geri kalanını kaplar
    height: 40, // Yükseklik
    borderColor: '#eb0a5c', // Kenarlık rengi
    borderWidth: 1, // Kenarlık genişliği
    paddingHorizontal: 5, // İç boşluk
    borderRadius: 4, // Köşe yuvarlaklığı
  },
  searchIcon: {
   
    position: 'absolute', // Mutlak konumlandırma
    right: 10, // Sağ boşluk
    fontSize: 20, // Sembol boyutu
  },
  image: {
    // Slider resimlerinin stil ayarları
    width: 390, // Genişlik
    height: 200, // Yükseklik
    resizeMode: 'cover', // Resmi kapsayıcıya uydurur
  },
  brandImage: {
    // Markalar için resim
    width: 90, // Genişlik
    height: 110, // Yükseklik
    resizeMode: 'contain', // Resmi kapsayıcıya bozmadan uydurur
    marginHorizontal: 10, // Yatayda boşluk
  },
  scrollContainer: {
    // Yatay kaydırılabilir markalar listesi
    alignItems: 'center', // Ortalar
    paddingHorizontal: 10, // Yatayda iç boşluk
  },
  brandsTitle: {
    // Markalar başlığı
    textAlign: 'center', // Ortalar
    fontSize: 20, // Yazı boyutu
    fontWeight: 'bold', // Kalın yazı tipi
    marginVertical: 10, // Yatayda boşluk
    color: '#DE3459', // Yazı rengi
  },
});

export default styles;
