import React,{useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, FlatList, Text,TouchableOpacity} from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import styles from './Category.styles'
import { categoriesProcess } from '../../Api/api';

const BASE_IMAGE_URL = 'https://eticaret.demo.pigasoft.com/panel/uploads/product_first_group_v/';


const Category = () => {
  const dispatch =useDispatch();
  const navigation = useNavigation();
  const{data:categoriesdata,status} = useSelector((state)=> state.categories)

  useEffect(() => {
      dispatch(categoriesProcess())
  }, []);

  if (status === 'loading') {
    return <Text>Loading...</Text>;
  }

  if (status === 'failed') {
    return <Text>Error: {error}</Text>;
  }

console.log(categoriesdata)

  const handlePress = (categoryId, categoryTitle) => {
    navigation.navigate('SubCategoryScreen', { categoryId:categoryId, CategoryTitle: categoryTitle });
  };

  const renderCategoryItem = ({ item }) => {
    return(
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => handlePress(item.id, item.title)}
    >
      <View style={styles.imageContainer} >
      <Image source={{ uri: BASE_IMAGE_URL + item.img_url }}  style={styles.Image}/>
      </View>
      <Text style={styles.categoryTitle}>{item.title}</Text>
    </TouchableOpacity>
  )};
 
  const renderHeader = () => (
    <Text style={styles.headerTitle}>Kategoriler</Text>
  );


  return (
    <FlatList
      data={categoriesdata}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={renderHeader}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );  
};

export default Category;
