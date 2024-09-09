import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', //üste hizaladık.
       padding: 20,
    backgroundColor:'white',
  },
  form: {
  
    backgroundColor: 'white',
    borderRadius: 0,
    padding: 20,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
    marginTop:10,
  },
  logo_container:{
    width: 300, 
    height: 106, 
    tintColor:'#DE3459',
    marginBottom:70,
  
  },
  buttonSpacing: {
    marginTop: 20,
  },
});

export default styles
