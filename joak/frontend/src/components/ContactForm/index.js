import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaPhone, FaMapMarker, FaMailBulk } from 'react-icons/fa';
import { ContactFormContainer, ContactFormWrapper, ContactHeadingWrapper, Heading, Subtitle, InnerContainer, ContactFormRow, ContactFormColumn, Column1, Column2, ContactInfoColumn, InfoHeading, InfoSubtitle, InfoNumber, InfoEmail, InfoAddress, SocialMedia, SocialMediaWrap, SocialIcons, SocialIconLink, FirstInnerColumn, SecondInnerColumn, HorizontalColumn, SecondHorizontalColumn, H1, H4 } from './ContactFormElements';
import Form from './Form';

const ContactForm = () => {

    return (
        <>
            <ContactFormContainer>
                <ContactFormWrapper>
                    <ContactHeadingWrapper>
                    <Heading>Contact Us</Heading>
                    <Subtitle>Please use the form below for any questions, concerns, or feedback!</Subtitle>
                    </ContactHeadingWrapper>
                    <InnerContainer>
                    <ContactFormRow>
                        <Column1>
                        <ContactInfoColumn>
                            <InfoHeading>Contact Information</InfoHeading>
                            <InfoSubtitle>Fill out the form and someone from our team will get back to you ASAP!</InfoSubtitle>
                            <InfoNumber><FaPhone />  385-337-4113</InfoNumber>
                            <InfoEmail><FaMailBulk/>  juanofakind20@gmail.com</InfoEmail>
                            <InfoAddress><FaMapMarker />  West Valley City, UT, 84119</InfoAddress>
                            <SocialMedia>
                                <SocialMediaWrap>
                                    <SocialIcons>
                                        <SocialIconLink href="https://www.facebook.com/juanofakindkitchen/posts" target="_blank" aria-label='Facebook'>
                                            <FaFacebook />
                                        </SocialIconLink>
                                        <SocialIconLink href="https://www.instagram.com/juan_of_a_kindkitchen/" target="_blank" aria-label='Instagram'>
                                            <FaInstagram />
                                        </SocialIconLink>
                                        <SocialIconLink href="https://www.youtube.com/channel/UCDnP-XXi6GE43NSb1xeEX-Q" target="_blank" aria-label='Youtube'>
                                            <FaYoutube />
                                        </SocialIconLink>
                                        <SocialIconLink href="https://www.linkedin.com/company/juan-of-a-kind-kitchen" target="_blank" aria-label='Linkedin'>
                                            <FaLinkedin />
                                        </SocialIconLink>
                                    </SocialIcons>
                                </SocialMediaWrap>
                            </SocialMedia>
                        </ContactInfoColumn>
                        </Column1>
                        <Column2>
                        <ContactFormColumn>
                            {/* <form>
                                <div>
                                    <label>
                                    First Name
                                    <input 
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        onChange={updateInput}
                                        value={formData.firstName || ''}
                                    />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                    Last Name
                                    <input 
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        onChange={updateInput}
                                        value={formData.lasttName || ''}
                                    />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                    Phone Number
                                    <input 
                                        type="tele"
                                        name="phoneNumber"
                                        placeholder="Phone Number"
                                        onChange={updateInput}
                                        value={formData.phoneNumber || ''}
                                    />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                    Email Address
                                    <input 
                                        type="email"
                                        name="emailAddress"
                                        placeholder="Email Address"
                                        onChange={updateInput}
                                        value={formData.emailAddress || ''}
                                    />
                                    </label>
                                </div>
                                <label>Contact Type:</label>
                                <div>
                                    <label>
                                        Question
                                        <input
                                            type="radio"
                                            name="conatctType"
                                            onChange={updateInput}
                                            value={formData.conatctType || ''}
                                        />
                                    </label>
                                    <label>
                                        Concern
                                        <input
                                            type="radio"
                                            name="conatctType"
                                            onChange={updateInput}
                                            value={formData.conatctType || ''}
                                        />
                                    </label>
                                    <label>
                                        Feedback
                                        <input
                                            type="radio"
                                            name="conatctType"
                                            onChange={updateInput}
                                            value={formData.conatctType || ''}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Message:
                                        <input 
                                            type="textarea"
                                            name="contactAdditionalInfo"
                                            onChange={updateInput}
                                            value={formData.contactAdditionalInfo || ''}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <button>Submit</button>
                                </div>
                            </form> */}
                        <Form />
                        </ContactFormColumn>
                        </Column2>
                    </ContactFormRow>
                    </InnerContainer>
                </ContactFormWrapper>
            </ContactFormContainer>
        </>
    )
}

export default ContactForm