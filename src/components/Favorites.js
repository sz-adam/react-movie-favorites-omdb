import React, { useContext } from "react";
import '../styles/MovieTitle.css';

import { FavoritesContext } from '../context/FavoritesContext';

export default function Favorites() {
    const { favorites, setFavorites } = useContext(FavoritesContext);
    const handleRemoveFavorite = (imdbID) => {
        setFavorites(prevFavorites => prevFavorites.filter(favorite => favorite.imdbID !== imdbID));
    };
    return (

        <div className="Favorites">
                    {favorites.map((favorite) => (
                        <div className="Favorit" key={favorite.imdbID}>
                            <p className="Title">{favorite.Title}</p>
                            <p className="IMG">
                                <img src={favorite.Poster} alt={favorite.Poster} />
                            </p>
                            <p className="Year">{favorite.Year}</p>
                            <p onClick={() => handleRemoveFavorite(favorite.imdbID)}><box-icon name='heart' type='solid' color='red' size='40px'></box-icon></p>
                        </div>
                    ))}
        </div>
    );
}
