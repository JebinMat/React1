import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

function AllUsers() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/user/`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div>
            <Navbar />
            <h1>Users</h1>
           {data.map((user) => (
            <li key={user.id}>
                <Link to={`/review/${user.id}`}>{user.username}</Link>
            </li>
           ))}
        </div>
    );
}


export default AllUsers;