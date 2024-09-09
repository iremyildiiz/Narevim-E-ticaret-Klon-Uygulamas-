import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',

  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,

  },
  logoContainer: {
    marginBottom: 30,
  },
  logo: {
    width: 220,
    height: 110,
    tintColor:'#DE3459',
    resizeMode: 'contain',
  },
  menuContainer: {
    width: '100%',
  },
  menuItem: {
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 28,//seçeneklerin dikeyde kapladığı alanalrı yönettik.
    shadowColor: 'white',
    alignItems:'center',
    flexDirection: 'row',//icon ve yazıyı yan yana koyduk.
    gap:10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  icon:{
    marginLeft:'auto'
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default styles;
