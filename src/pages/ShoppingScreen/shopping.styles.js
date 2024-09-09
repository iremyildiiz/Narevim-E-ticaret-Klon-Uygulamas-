import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
    },
    content: {
      flex: 1,
      padding: 20,
      // Buraya ürünlerin listeleneceği içerik gelir.
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      borderTopWidth: 1,
      borderTopColor: '#ccc',
      backgroundColor: '#f8f8f8',
    },
    leftSection: {
      flexDirection: 'column',//sepet toplam ve fiatı alta hizaladı
      alignItems: 'center',
    },
    totalText: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    priceText: {
      fontSize: 16,
      marginLeft: 5,
      color:'#DE3459'
    },
    completeButton: {
      backgroundColor: '#DE3459',
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 15,
      fontWeight: 'bold',
    },
  });

  export default styles