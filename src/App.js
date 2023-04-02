import { BrowserRouter as Router } from "react-router-dom"
import './App.css';
import { FavoritesContext,FavoritesContextDefaults } from "./context/FavoritesContext";
import { useState,useEffect } from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Content from './components/Content'
import Movie from "./components/Movie";
import Favorites from "./components/Favorites";




function App() {
  const [favorites, setFavorites] =useState(FavoritesContextDefaults.value)
  const [initialized, setInitialized] = useState(false)


  useEffect(()=> {
    if(localStorage.getItem("favorites") !==null){
        setFavorites(JSON.parse(localStorage.getItem("favorites")))
    }

    setInitialized(true);
  }, [])

  useEffect(()=> {
    if (initialized){
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites, initialized]);
    

  const pages = [
    { name: "Kezdőlap", path: '/', menubar: true, element: <Movie /> },
    { name: "Kedvencek", path: '/favorites', menubar: true, element: <Favorites /> },
    { name: "NotFound", path: '*', menubar: false, element: <>NotFound</>, icon: null },
  ]

  return (
    <FavoritesContext.Provider value={{favorites, setFavorites}}>
    <div className="App">
      <Router>
        <Header menu={pages} />
        <Content routes={pages} />
        <Footer />
      </Router>
    </div>

    </FavoritesContext.Provider>

  );
}

export default App;
