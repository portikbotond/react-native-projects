import {CATEGORIES} from "../../data/dummy-data";
import {FlatList} from "react-native";
import {CategoryGridTile} from "../../components/CategoryGridTile/CategoryGridTile";

export const CategoriesScreen = ({navigation}) => {
  const renderCategoryItem = (itemData) => {

    const onPressHandler = () => {
      navigation.navigate('MealsOverview', {categoryId: itemData.item.id});
    }
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={onPressHandler}/>;
  }

  return <FlatList
    data={CATEGORIES}
    keyExtractor={(item) => item.id}
    renderItem={renderCategoryItem.bind()}
    numColumns={2}
  />
}
