import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import '../styles/MovieTitle.css'
import MovieTitle from "./MovieTitle";

export default function Movie(props) {
    const [list, setList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=kulcs`)
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
    }, [searchTerm])

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }
    return (
        <div className="movie">
            <input type="text" placeholder="Keressen egy filmet ..." value={searchTerm} onChange={handleSearch} />
            <div className="row">
                {list.map(element => <MovieTitle key={element.imdbID} value={element} />)}
            </div>
        </div>
    )
}