import { Dimensions, StyleSheet } from 'react-native';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginBottom:10,
    padding:10,
    
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  firstBlock: {
    width:width,
    height:'100',
    marginBottom: 10, 
    backgroundColor:'white',
    right:40,
    padding:20
  },
  secondBlock: {
    width:width,
    marginBottom: 250, 
    backgroundColor:'white',
    padding:22,
    right:40
    },
   
    buttonSpacing: {
   
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 10,
    color: 'black', // Başlığın rengini ayarlayın
  },

});

export default styles;
