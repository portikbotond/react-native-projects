import {createContext, useState} from "react";

export const FavoritesContext  = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: () => {}
})

export const FavoritesContextProvider = ({children}) => {
  const [favoriteMealIds , setFavoriteMealIds] =useState([]);

  const addFavorite = (id) => {
    setFavoriteMealIds((prev) => [...prev, id]);
  }

  const removeFavorite = (id) => {
    setFavoriteMealIds((prev) => prev.filter((item) => item !== id));

  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite
  }

  return <FavoritesContext.Provider value={value} >{children}</FavoritesContext.Provider>
}
