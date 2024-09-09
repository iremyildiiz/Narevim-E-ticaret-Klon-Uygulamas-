import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Button, ActivityIndicator, TouchableOpacity, Modal, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { mainProductProcess } from '../../Api/api'; // API'den ürünleri çekme işlemi
import styles from './ProductPage.styles'; // Aynı stil dosyasını kullanabiliriz
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const BASE_IMAGE_URL = "https://www.demo.pigasoft.com/eticaret/panel/uploads/product_v/original/";

const MainProduct = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation(); // Navigasyon nesnesini al
  const route = useRoute();
  const brandId = route.params?.brandId;

  const { data, status, error } = useSelector(state => state.mainProduct);
  const [sortOrder, setSortOrder] = useState('asc'); // Sıralama durumu
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (brandId) {
      dispatch(mainProductProcess({ brandId }));
    } else {
      console.error('Brand ID is not available');
    }
  }, [dispatch, brandId]);

  const handleProductDetailPress = (product) => {
    navigation.navigate('mainProduct', { productId: product.id }); // Ürün ID'sini geçerek yönlendir
  };

  const handleSortChange = (oxrder) => {
    setSortOrder(order);
    setModalVisible(false);
  };

  const sortProducts = (products) => {
    if (products) {
      return [...products].sort((a, b) => {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);

        return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
      });
    }
    return [];
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: BASE_IMAGE_URL + item.img_url }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}₺</Text>
      
      {/* Ürün Detayı Butonu */}
      <Button 
        title="Ürün Detayı" 
        onPress={() => handleProductDetailPress(item)} 
        color="#e91e63"
      />
    </View>
  );

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
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.sortButton}>
        <FontAwesome name="sort" size={20} color="#fff" />
        <Text style={styles.sortButtonText}> Sıralama</Text>
      </TouchableOpacity>

     <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Pressable onPress={() => handleSortChange('asc')} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Fiyata Göre Artan</Text>
            </Pressable>
            <Pressable onPress={() => handleSortChange('desc')} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Fiyata Göre Azalan</Text>
            </Pressable>
            <Pressable onPress={() => setModalVisible(false)} style={styles.modalCloseButton}>
              <Text style={styles.modalCloseButtonText}>Kapat</Text>
            </Pressable>ne yapacağımı bil
          </View>
        </View>
      </Modal>

      <FlatList
        data={sortProducts(data?.data)}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} 
        columnWrapperStyle={styles.columnWrapper} // Ürünler arasındaki hizalamayı düzeltir
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default MainProduct;
