import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    color: '#DE3459', 
  },
  loginButton: {
    backgroundColor: '#dc0155', 
    borderColor: '#dc0155',     
  },
  signUpButton: {
    backgroundColor: 'white',   
    borderColor: '#DE3459',    
  },
  buttonText: {
    color: 'white',           
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpButtonText: {
    color: '#DE3459',          
  },
});

export default styles;
