import { useState, useEffect } from "react";
import Movie from "../components/Movie"; 

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async() => {
        const response = await fetch(
            "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year " // get movies with a minimum rating of 8.5 and sort by year
        );
        const json = await response.json();
        setMovies(json.data.movies); // set the movies state to the movies data from the API
        setLoading(false);
    }

    useEffect(() => { // useEffect: allows us to run a function when the component is mounted
        getMovies(); // call the getMovies function
    }, []);

    return (
        <div>
        {
            loading ?   
            <h1>Loading...</h1>  // if loading is true, show the loading text
            :
            movies.map((movie) => ( // map through the movies array and return a Movie component for each movie
                <Movie  // pass the movie data as props to the Movie component
                    key={movie.id}
                    id={movie.id}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                />
            ))
        }
        </div>
    );
}

export default Home;
