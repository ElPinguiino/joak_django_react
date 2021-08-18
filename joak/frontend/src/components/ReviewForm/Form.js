/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import DatePicker from 'react-datetime-picker';
import axios from 'axios';

const Form = () => {

    const [firstName, setFirstName] = useState("")
    const [lastInitial, setLastInitial] = useState("")
    const [dateVisited, setDateVisited] = useState("")
    const [foodRating, setFoodRating] = useState("")
    const [serviceRating, setServiceRating] = useState("")
    const [message, setMessage] = useState("")

    const history = useHistory();
    
    const addReviewForm = async () => {
        let formField = new FormData

        formField.append('firstName', first_name)
        formField.append('lastInitial', first_initial)
        formField.append('dateVisited', date_visited)
        formField.append('foodRating', food_rating)
        formField.append('serviceRating', service_rating)
        formField.append('message', message)

        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/reviewform/',
            data: formField,
        }).then((response) => {
            console.log(response.data);
            history.push('/')
        })
    }
    return (
        <div>
            <h1>Review Form</h1>

            <div className="container">
                <div className="form-group">
                    
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="First Name"
                        name="firstName"
                        defaultValue={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Last Initial"
                        name="lastInitial"
                        defaultValue={lastInitial}
                        onChange={(e) => setLastInitial(e.target.value)} />
                </div>
                <div className="form-group">
                        <DatePicker
                            defaultValue={dateVisited} 
                            onChange={(e) => setDateVisited(e.target.value)} />
                </div>        
                <div className="form-group">
                <label>Food Rating:</label>       
                    <label>1</label>
                    <input
                        type="radio"
                        className="form-control form-control-lg"
                        placeholder="Feedback"
                        name="foodRating"
                        defaultValue={foodRating}
                        onchange={(e) => setFoodRating(e.target.value)} />
                    <label>2</label>
                    <input
                        type="radio"
                        className="form-control form-control-lg"
                        placeholder="Feedback"
                        name="foodRating"
                        defaultValue={foodRating}
                        onchange={(e) => setFoodRating(e.target.value)} />
                    <label>3</label>
                    <input
                        type="radio"
                        className="form-control form-control-lg"
                        placeholder="Feedback"
                        name="foodRating"
                        defaultValue={foodRating}
                        onchange={(e) => setFoodRating(e.target.value)} />
                    <label>4</label>
                    <input
                        type="radio"
                        className="form-control form-control-lg"
                        placeholder="Feedback"
                        name="foodRating"
                        defaultValue={foodRating}
                        onchange={(e) => setFoodRating(e.target.value)} />
                    <label>5</label>
                    <input
                        type="radio"
                        className="form-control form-control-lg"
                        placeholder="Feedback"
                        name="foodRating"
                        defaultValue={foodRating}
                        onchange={(e) => setFoodRating(e.target.value)} />
                </div>
                <div className="form-group">
                <label>Service Rating:</label>       
                    <label>1</label>
                    <input
                        type="radio"
                        className="form-control form-control-lg"
                        name="serviceRating"
                        defaultValue={serviceRating}
                        onchange={(e) => setServiceRating(e.target.value)} />
                    <label>2</label>
                    <input
                        type="radio"
                        className="form-control form-control-lg"
                        name="serviceRating"
                        defaultValue={serviceRating}
                        onchange={(e) => setServiceRating(e.target.value)} />
                    <label>3</label>
                    <input
                        type="radio"
                        className="form-control form-control-lg"
                        name="serviceRating"
                        defaultValue={serviceRating}
                        onchange={(e) => setServiceRating(e.target.value)} />
                    <label>4</label>
                    <input
                        type="radio"
                        className="form-control form-control-lg"
                        name="serviceRating"
                        defaultValue={serviceRating}
                        onchange={(e) => setServiceRating(e.target.value)} />
                    <label>5</label>
                    <input
                        type="radio"
                        className="form-control form-control-lg"
                        name="serviceRating"
                        defaultValue={serviceRating}
                        onchange={(e) => setServiceRating(e.target.value)} />
                </div>
                <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Give us a little more info regarding your contact..."
                        name="message"
                        defaultValue={message}
                        onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button className="btn btn-success" onClick={addReviewForm}>Submit</button>
                </div>
            </div>
        </div>
    );        
};

export default Form;