import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';
import { thirdCategoriesProcess } from '../../Api/api';
import styles from './SubCategory.styles';

const BASE_IMAGE_URL = 'https://www.demo.pigasoft.com/eticaret/panel/uploads/product_third_group_v/350x216/';

const ThirdCategoryScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();  // useNavigation kullanımı eklendi

  const route = useRoute();

  const { categoryId, CategoryTitle } = route.params;

  const { data, status, error } = useSelector(state => state.thirdCategories);

  useEffect(() => {
    if (categoryId) {
      dispatch(thirdCategoriesProcess(categoryId));
    }
  }, [dispatch, categoryId]);

  useEffect(() => {
    navigation.setOptions({
      title: CategoryTitle || 'Alt Kategoriler',
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
    });
  }, [CategoryTitle, navigation]);

  const renderThirdCategoriesItem = ({ item }) => (
    <TouchableOpacity style={styles.subCategoryItem}>
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
        renderItem={renderThirdCategoriesItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default ThirdCategoryScreen;
