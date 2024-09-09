import { Dimensions, StyleSheet } from 'react-native';
import { Image } from 'react-native-reanimated/lib/typescript/Animated';

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
   
  },
  listContainer: {
   paddingHorizontal:0,
  },
  categoryItem: {
    width: screenWidth , // Ekranın tamamını kapladı ve kenarlardan boşluk bırakt
    marginVertical:0.5, // Dikeyde boşluk bıraktım
    padding: 35,
    borderRadius: 8,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',//yazıları sola hizaladım.
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 3,
    shadowRadius: 3,
    flexDirection:'row',
    gap:10
  },
  categoryTitle: {
    fontSize: 15,
    fontWeight: 'normal',
    color: 'black',
    textAlign:'left',
  },
  headerContaniner:{
    backgroundColor:'white',
    padding:4,//başlığın arka plan mesafesi
    marginBottom:2,//kategoriler ve başlık arasındaki mesafe
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 1, // Köşeleri yuvarlatmak için opsiyonel
    marginRight: 5,
    
  },
Image:{
  width:'100%',
  height:'150%',
  resizeMode:'cover',
 
},
  headerTitle:{
    fontSize:25,
    padding:10,
    color:'#DE3459',
    textAlign:'center',//başlık ortalama
    fontWeight:'bold',
    backgroundColor:'white'

  },
});
