import {Text, View, Image, ScrollView, Button} from "react-native";
import {MEALS} from "../../data/dummy-data";
import {s} from './MealDetailScreen.style'
import {MealDetails} from "../../components/MealDetails/MealDetails";
import {SubTitle} from "../../components/MealDetail/SubTitle/SubTitle";
import {List} from "../../components/MealDetail/List/List";
import {useContext, useLayoutEffect} from "react";
import {IconButton} from "../../components/IconButton/IconButton";
import {FavoritesContext} from "../../store/context/favorites-context";
import {useDispatch, useSelector} from "react-redux";
import {addFavorite, removeFavorite} from "../../store/redux/favorites";

export const MealDetailsScreen = ({route, navigation}) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  // const favoriteMealCtx = useContext(FavoritesContext);
  // const mealIsFavorite = favoriteMealCtx.ids.includes(mealId);

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  const dispatch = useDispatch();


  const changeFavoriteHandler = () => {
    if(mealIsFavorite) {
      // favoriteMealCtx.removeFavorite(mealId);
      dispatch(removeFavorite({id:mealId}))
    } else {
      // favoriteMealCtx.addFavorite(mealId)
      dispatch(addFavorite({id:mealId}))
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon={mealIsFavorite ? 'star' : 'star-outline'} color="white" onPress={changeFavoriteHandler}/>
      }
    })
  }, [navigation, changeFavoriteHandler]);

  return(
    <ScrollView style={s.rootContainer}>
      <Image style={s.image} source={{uri: selectedMeal.imageUrl}}/>
      <Text style={s.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={s.detailTextStyle}
      />
      <View style={s.listOuterContainer}>
        <View style={s.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal.ingredients}/>
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal.steps}/>
        </View>
      </View>
    </ScrollView>
  )
}
