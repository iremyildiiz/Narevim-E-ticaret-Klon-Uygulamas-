import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { secondCategoriesProcess } from '../../Api/api';
import styles from './SubCategory.styles';
import Icon from 'react-native-vector-icons/Ionicons';

const BASE_IMAGE_URL = 'https://www.demo.pigasoft.com/eticaret/panel/uploads/product_second_group_v/350x216/';

const SecondCategoryScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  // route.params'dan gelen kategori adı ve ID'si
  const { categoryId, CategoryTitle } = route.params;

  const { data, status, error } = useSelector(state => state.secondCategories);

  useEffect(() => {
    if (categoryId) {
      dispatch(secondCategoriesProcess(categoryId));
    }
  }, [dispatch, categoryId]);

  // Başlığı dinamik olarak ayarlama
  useEffect(() => {
    navigation.setOptions({
      title: CategoryTitle || 'Alt Kategoriler',  // Dinamik başlık
      headerTitleStyle: {
        color: '#DE3459',
        fontSize: 18,
        fontWeight: 'bold',
      },
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: '#DE3459',
      headerTitleAlign: 'center',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 2 }}>
          <Icon name="chevron-back" size={24} color="#DE3459" />
        </TouchableOpacity>
      ),
    });
  }, [CategoryTitle, navigation]);

  const renderSecondCategoriesItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.subCategoryItem}
      onPress={() => navigation.navigate('ThirdCategoryScreen', { categoryId: item.id, CategoryTitle: item.title })}  // Üçüncü kategoriye geçiş yaparken başlığı da gönderiyoruz
    >
      <Image source={{ uri: BASE_IMAGE_URL + item.img_url }} resizeMode="cover" style={styles.subCategoryImage} />
      <Text style={styles.subCategoryTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  if (status === 'loading') {
    return <Text>Loading...</Text>;
  }

  if (status === 'failed') {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderSecondCategoriesItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default SecondCategoryScreen;
