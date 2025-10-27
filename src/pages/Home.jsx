
import MovieCard from "../components/MovieCard"

function Home() {
    const movies = [
        { id: 1, title: "John Wick", release_date: "2020" },
        { id: 2, title: "The bad guys", release_date: "2021" },
        { id: 3, title: "Shrek 3", release_date: "2007" },

    ];

    const handleSearch = () =>{

    }

    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
        <input 
            type="text" 
            placeholder="search for movies..." 
            className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">            
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
    );
}

export default Home