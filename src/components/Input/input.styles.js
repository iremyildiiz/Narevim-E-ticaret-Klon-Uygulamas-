import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    paddingHorizontal:2,

  },
  iconWrapper: {
    justifyContent: 'center', // İkonu dikeyde ortalar
    marginLeft: 30, // İkon ile `TextInput` arasındaki boşluk ayarlıyor.
    marginRight: 10, // İkon ile kutu kenarı arasındaki boşluk ayarlıyor.
  },
  icon: {
    height: '50%', 
    right:30
   
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: 'black',
    height: '100%', // `TextInput`'ın yüksekliğini ayarlarlıyor.
    textAlign:'left'
  },
 
});

export default styles;
