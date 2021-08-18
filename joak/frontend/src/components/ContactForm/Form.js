import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';


const Form = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [contactType, setContactType] = useState("")
    const [message, setMessage] = useState("")
    // const [image, setImage] = useState(null)

    const history = useHistory();
    
    const AddContactForm = async () => {
        let formField = new FormData()

        // eslint-disable-next-line no-undef
        formField.append('firstName', first_name)
        // eslint-disable-next-line no-undef
        formField.append('lastName', last_name)
        // eslint-disable-next-line no-undef
        formField.append('phoneNumber', phone_number)
        formField.append('email', email)
        // eslint-disable-next-line no-undef
        formField.append('contact_type', contact_type)
        formField.append('message', message)

        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/contactform/',
            data: formField,
        }).then((response) => {
            console.log(response.data);
            history.push('/')
        })
    }


    return (
        <div>
            <h1>Contact Form</h1>

            <div className="container">
                <div className="form-group">
                    
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="First Name"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Last Name"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)} />
                </div>        
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className="form-group">     
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Email"
                        name="email"
                        defaultValue={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">   
                    <label>Feedback</label>
                    <input
                        type="radio"
                        className="form-control form-control-lg"
                        placeholder="Feedback"
                        name="contactType"
                        value={contactType}
                        onchange={(e) => setContactType(e.target.value)} />
                    <label>Question</label>
                    <input
                        type="radio"
                        className="form-control form-control-lg"
                        name="contactType"
                        value={contactType}
                        onChange={(e) => setContactType(e.target.value)} />
                    <label>Concern</label>
                    <input
                        type="radio"
                        className="form-control form-control-lg"
                        name="contactType"
                        value={contactType}
                        onChange={(e) => setContactType(e.target.value)} />
                </div>
                <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Give us a little more info regarding your contact..."
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)} />
                </div>
                {/* <div className="form-group">
                    <input
                        type="file"
                        className="form-control form-control-lg"
                        name="image"
                        value={image}
                        onChange={(e) => setImage(e.target.files[0])} />
                </div> */}
                <button className="btn btn-success" onClick={AddContactForm}>Submit</button>
                </div>
            </div>
        </div>
    );      
};

export default Form;