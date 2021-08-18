import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ShowReviews = () => {
    
    const [reviews, setReviews] = useState([])

    const getReviews = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/reviewform/')
        setReviews(response.data)
    }
    
    useEffect(() =>{
        getReviews();
    }, [])


    return (
        <div>
            <h1>Reviews</h1>
            {
                reviews.map((reviews,index) => (
                    <div>
                        <p>{reviews.first_name}</p>
                        <p>{reviews.last_initial}</p>
                        <p>{reviews.date_visited}</p>
                        <p>{reviews.food_rating}</p>
                        <p>{reviews.service_rating}</p>
                        <p>{reviews.review_message}</p>
                    </div>
                )
                )
            }
        </div>
    )
}

export default ShowReviews
