import { useEffect, useState } from "react";
import {useParams } from "react-router-dom"; // useParams: allows us to get the id from the URL
import styles from '../Button.module.css'; 

function Detail() {
    const {id} = useParams(); // get the id from the query string
    const [movie, setMovie] = useState(""); 
    
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
    };

    const watchMovie = () => {
        window
            .open(movie.url, "_blank") // open the torrent url in a new tab
            .focus(); // focus on the new tab
    };

    useEffect(() => { 
        getMovie();
    }, []); // pass an empty array as a second argument to the useEffect function so that the function is only executed once

    return (
        <div>
            <h2>Title: {movie.title}</h2>
            <button
                className={styles.btn}
                onClick={watchMovie}
            >
                Watch Movie
            </button>
        </div>
    );
}

export default Detail;