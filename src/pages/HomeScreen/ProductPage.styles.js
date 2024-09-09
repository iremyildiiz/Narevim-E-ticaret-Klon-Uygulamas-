import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8', // Hafif gri arka plan, göz yormayan bir renk
    paddingHorizontal: 10, // Ekranın kenarlarından biraz boşluk bırakır
  },
  productContainer: {
    flex: 1,
    margin: 5, // Ürünler arasında biraz boşluk bırakılır
    backgroundColor: 'white', // Ürün kartı beyaz
    borderRadius: 10, // Kartın köşeleri yuvarlatılır
    overflow: 'hidden', // Görseller köşelerde dışarı taşmasın
    shadowColor: '#000', // Gölge rengi siyah
    shadowOffset: { width: 0, height: 2 }, // Yatay ve dikey gölge kayması
    shadowOpacity: 0.1, // Gölge şeffaflığı
    shadowRadius: 4, // Gölge yayılması
    elevation: 3, // Android için gölge efekti
    padding: 10, // İç boşluk bırakır
    alignItems: 'center', // İçerikleri ortalar
    justifyContent: 'space-between', // Öğeleri dikeyde ayırır
  },
  productImage: {
    width: '100%',
    height: 180, // Görselin yüksekliği
    borderTopLeftRadius: 10, // Üst köşelerdeki yuvarlama
    borderTopRightRadius: 10, // Üst köşelerdeki yuvarlama
    resizeMode: 'cover',
  },
  productTitle: {
    fontSize: 16, // Başlık boyutunu biraz büyüttüm
    fontWeight: '600', // Başlık yazısı daha kalın
    color: '#333', // Daha koyu bir yazı rengi
    marginTop: 10, // Üst kısımda boşluk
    paddingHorizontal: 10, // Başlığın iki yanından boşluk
  },
  productPrice: {
    fontSize: 15, // Fiyat yazısını biraz daha büyük yaptım
    fontWeight: 'bold',
    color: '#e91e63', // Canlı bir pembe rengi fiyat için
    paddingHorizontal: 10, // Fiyatın iki yanından boşluk
    marginVertical: 5, // Üst ve alt boşluk
  },
  productDetailsContainer: {
    paddingBottom: 5, // Kartın alt kısmında boşluk
    paddingHorizontal: 10,
  },
  flatListContent: {
    paddingBottom: 20, // Listenin alt kısmında boşluk bırakır
  },
  columnWrapper: {
    justifyContent: 'space-between', // Ürünleri hizalamak için
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8', // Yükleme ekranı için arka plan
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e91e63',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
  },
  sortButtonText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalButton: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    fontSize: 18,
    color: '#000',
  },
  modalCloseButton: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#e91e63',
    borderRadius: 5,
  },
  modalCloseButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;
