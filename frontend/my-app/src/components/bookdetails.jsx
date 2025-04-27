import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";

function BookDetails(){
    const [book, setBook] = useState({});
    const [reviews, setReviews] = useState([])

    const { bookID } = useParams();
    
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/book/${bookID}/`)
            .then((res) => res.json())
            .then((data) => setBook(data))
    }, [bookID])

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/review/?book=${bookID}`)
            .then((res) => res.json())
            .then((data) => setReviews(data))
    })

    return(
        <div>
            <Navbar />
            <h1>{book.title}</h1>
            <h2>By: {book.author?.first_name} {book.author?.last_name}</h2>
            <h3>Synposis</h3>
            <p>{book.synopsis}</p>
            <h3>Reviews</h3>
            {reviews.map((review) => (
                <ul key={review.id}>
                    <h4>Review</h4>
                    {review.review_text}
                    <h5>Score</h5>
                    {review.review_score}
                </ul>
            ))}
        </div>
    )
}

export default BookDetails;