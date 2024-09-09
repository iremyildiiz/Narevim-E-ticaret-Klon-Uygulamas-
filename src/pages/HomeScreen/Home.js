// HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { brandProcess, sliderProcess } from '../../Api/api';
import styles from './Home.styles';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';

const Base_URl = "https://www.demo.pigasoft.com/eticaret/panel/uploads/slides_v/1970x500/";
const Base_URL_Brand = "https://eticaret.demo.pigasoft.com/panel/uploads/brands_v/228x290/";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { data: slidersdata } = useSelector(state => state.sliders);
  const { data: branddata } = useSelector(state => state.brands);

  useEffect(() => {
    dispatch(sliderProcess());
    dispatch(brandProcess());
  }, [dispatch]);

  const handleSliderPress = (brandId) => {
    // Slidera tıklandığında ProductListScreen'e yönlendir
    navigation.navigate('ProductStack', {
      screen: 'mainProduct',
      params: { brandId }
    });
  };
  const renderSliderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleSliderPress(item.brandId)}>
    <View style={styles.itemContainer}>
      <Image source={{ uri: Base_URl + item.img_url }} style={styles.image} />
    </View>
    </TouchableOpacity>
  );

  const handleBrandPress = (brandId) => {
    // ProductStack içindeki ProductPage ekranına navigasyon yapın
    navigation.navigate('ProductStack', {
      screen: 'ProductPage',
      params: { brandId }
    });
  };
  
  const renderBrandItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleBrandPress(item.id)}>
      <Image source={{ uri: Base_URL_Brand + item.img_url }} style={styles.brandImage} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Aramak istediğiniz ürünü giriniz..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Icon name="search" size={20} color="#DE3459" style={styles.searchIcon} />
      </View>

      <ScrollView style={styles.scrollViewContainer}>
        <FlatList
          data={slidersdata}
          renderItem={renderSliderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <Text style={styles.brandsTitle}>Markalar</Text>
        <FlatList
          data={branddata}
          renderItem={renderBrandItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
