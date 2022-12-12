import {Link} from "react-router-dom"; // Link: allows us to navigate to a different route

function Movie({id, coverImg, title, summary, genres}) { // get the props from the Home component and destructure them
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2>
              <Link to={`/movie/${id}`}>{title}</Link> {/* Link to the movie route */}
            </h2>
            <p>{summary}</p>
            <ul>
              {genres.map((g) => (
                <li key={g}>Genres: {g}</li>
              ))}
            </ul>
          </div>
    )
}

export default Movie
