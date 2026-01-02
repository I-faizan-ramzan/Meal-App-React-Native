import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
// import { useContext } from "react";
// import { FavoritesContext } from "../store/context/favorite-context";
import { favoriteMeal } from "../store/redux/favorites";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

// component starts from here
export default function FavoriteScreen({}) {
  // const favoriteMEalsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeal.ids);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainerL}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return (
    <>
      <MealsList items={favoriteMeals} />
    </>
  );
}

const styles = StyleSheet.create({
  rootContainerL: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
