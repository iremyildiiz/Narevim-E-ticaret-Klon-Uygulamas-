import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import styles from './shopping.styles';
const ShoppingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      </View>
      <View style={styles.footer}>
        <View style={styles.leftSection}>
          <Text style={styles.totalText}>Sepet Toplamı: </Text>
          <Text style={styles.priceText}>0.00 TL</Text>
        </View>
        <TouchableOpacity style={styles.completeButton}>
          <Text style={styles.buttonText}>Alışverişi Tamamla</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default ShoppingScreen;
