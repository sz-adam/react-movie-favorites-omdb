import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import '../styles/MovieTitle.css'
import MovieTitle from "./MovieTitle";

export default function Movie(props) {
    const [list, setList] = useState([]);
    const [search, setSearch] = useState("");


    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?s=${search}&apikey=kulcs`)
            .then(res => {
                if (res.data.Search) {
                    setList(res.data.Search)
                } else {
                    setList([])
                }
            })
            .catch(error => {
                setList([])
            })
    }, [search])

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }
    return (
        <div className="movie">
            <input type="text" placeholder="Keressen egy filmet ..." value={search} onChange={handleSearch} />
            <div className="row">
                {list.map(element => <MovieTitle key={element.imdbID} value={element} />)}
            </div>
        </div>
    )
}