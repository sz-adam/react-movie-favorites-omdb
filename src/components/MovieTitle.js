import React, { useContext } from "react";
import '../styles/MovieTitle.css';
import { FavoritesContext } from '../context/FavoritesContext';

export default function MovieTitle(props) {

  const { favorites, setFavorites } = useContext(FavoritesContext);

  function inFavorites() {
    const selectedElements = favorites.filter(
      (element) => element.imdbID === props.value.imdbID
    );
    return selectedElements.length > 0;
  }

  function toggleFavorite() {
    if (inFavorites()) {
      const newFavorites = favorites.filter(
        (element) => element.imdbID !== props.value.imdbID
      );
      setFavorites(newFavorites);
    } else {
      const newFavorites = [...favorites, props.value];
      setFavorites(newFavorites);
    }
  }

  let btnFavorite = <box-icon name="heart" type='regular' size='40px'></box-icon>;
  if (inFavorites()) {
    btnFavorite = <box-icon name='heart' type='solid' color='red' size='40px'></box-icon>;
  }

  return (
    <div className="Movie">
      <p className="Title">{props.value.Title}</p>
      <p className="IMG">
        <img src={props.value.Poster} alt={props.value.Poster} />
      </p>
      <p className="Year">{props.value.Year}</p>
      <p onClick={toggleFavorite}>{btnFavorite}</p>
    </div>
  );
}