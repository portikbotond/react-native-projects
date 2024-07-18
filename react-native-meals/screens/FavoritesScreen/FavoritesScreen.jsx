import {useContext} from "react";
import {FavoritesContext} from "../../store/context/favorites-context";
import {MealList} from "../../components/MealList/MealList/MealList";
import {MEALS} from "../../data/dummy-data";
import {Text, View, StyleSheet} from "react-native";
import {useSelector} from "react-redux";

export const FavoritesScreen = () => {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  // const favoriteMeals = MEALS.filter((meal) => favoriteMealsCtx.ids.includes(meal.id));

  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));


  if(favoriteMeals.length === 0) {
    return <View style={s.rootContainer}>
      <Text style={s.text}>You have no favorites yet.</Text>
    </View>
  }

  return <MealList items={favoriteMeals}/>
}

const s = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})
