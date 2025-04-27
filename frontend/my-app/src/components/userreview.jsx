import { useState,useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./navbar";

function UserReview() {
    const [reviews, setReviews] = useState([]);
    const { userId } = useParams();

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/review/?user=${userId}`)
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, [userId])

    const reviewerName = reviews[0]?.user?.username;

    return(
        <div>
        <Navbar />
        <h1>Reviewer: {reviewerName}</h1>
        {reviews.map((review) => (
            <div key={review.id}>
                <h3>Book: {review.book.title}</h3>
                <p>{review.review_text}</p>
                <p>Score: {review.review_score}</p>
                <p><Link to={`/book/${review.book?.id}`}>View Book</Link></p>
            </div>
        ))}
    </div>
    )
}

export default UserReview;