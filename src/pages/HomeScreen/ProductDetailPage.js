import React, { useEffect } from 'react';
import { View, Text, Image, ActivityIndicator, Button, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { fetchProductDetails } from '../../Api/api';

const BASE_IMAGE_URL = "https://www.demo.pigasoft.com/eticaret/panel/uploads/product_v/original/";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const productId = route.params?.productId;

  const { data, status, error } = useSelector(state => state.productDetails);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetails(productId));
    }
  }, [dispatch, productId]);

  if (status === 'loading') {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (status === 'failed') {
    return (
      <View style={styles.centered}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: BASE_IMAGE_URL + data?.data.img_url }} style={styles.productImage} />
      <Text style={styles.productTitle}>{data?.data.title}</Text>
      <Text style={styles.productDescription}>{data?.data.description}</Text>
      <Text style={styles.productPrice}>{data?.data.price}</Text>
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  productDescription: {
    fontSize: 16,
    marginVertical: 8,
    color: 'gray',
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductDetailPage;
