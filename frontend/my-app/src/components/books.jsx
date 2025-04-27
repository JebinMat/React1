import { useState, useEffect } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

function AllBooks() {
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("");
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetch genres when page loads
        fetch(`http://127.0.0.1:8000/api/genre/`)
            .then((res) => res.json())
            .then((data) => setGenres(data));
    }, []);

    useEffect(() => {
        // Fetch books when selectedGenre changes
        if (selectedGenre !== "") {
            fetch(`http://127.0.0.1:8000/api/book/?genre=${selectedGenre}`)
                .then((res) => res.json())
                .then((data) => setBooks(data));
        }
    }, [selectedGenre]); // <- runs whenever selectedGenre changes

    const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value);
    };

    return (
        <div>
            <Navbar />
            <h1>Select a Genre</h1>
            <select value={selectedGenre} onChange={handleGenreChange}>
                <option value="">--Select Genre--</option>
                {genres.map((genre) => (
                    <option key={genre.id} value={genre.name}>
                        {genre.name}
                    </option>
                ))}
            </select>

            {selectedGenre && (
                <>
                    <h2>Books in {selectedGenre}:</h2>
                    <ul>
                        {books.map((book) => (
                            <li key={book.id}>
                                <p>Title: <Link to={`/book/${book.id}`}>{book.title}</Link></p>
                                <p>By: {book.author.first_name} {book.author.last_name}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default AllBooks;
