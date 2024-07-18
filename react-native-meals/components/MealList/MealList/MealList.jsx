import {s} from './MealList.style';
import {MealItem} from "../MealItem/MealItem";
import {FlatList, View} from "react-native";
export const MealList = ({items}) => {
  const renderMealItem = (itemData) => {

    const mealItemProps= {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity
    }
    return <MealItem {...mealItemProps}/>
  }
  return <View style={s.container}>
    <FlatList data={items}
              keyExtractor={(item) => item.id + Math.random()}
              renderItem={renderMealItem}
    />
  </View>
}
