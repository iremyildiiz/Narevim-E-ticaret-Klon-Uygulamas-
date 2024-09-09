import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer:{
    paddingHorizontal:0,
  },
  subCategoryItem: {
    width: screenWidth,
    marginVertical:0.5, // Dikeyde boşluk bıraktım
    padding: 3,
    borderRadius: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    elevation: 1,
    flexDirection: 'row',
    gap: 10,
   
  },
  subCategoryImage: {
    width: 100,
    height: 70,
    marginBottom: 1,
    borderRadius: 3,
  },
  subCategoryTitle: {
    fontSize: 15,
    color: 'black',
  },
});
