import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaPhone, FaMapMarker, FaMailBulk } from 'react-icons/fa';
import { ContactFormContainer, ContactFormWrapper, ContactHeadingWrapper, Heading, Subtitle, InnerContainer, ContactFormRow, ContactFormColumn, Column1, Column2, ContactInfoColumn, InfoHeading, InfoSubtitle, InfoNumber, InfoEmail, InfoAddress, SocialMedia, SocialMediaWrap, SocialIcons, SocialIconLink, FirstInnerColumn, SecondInnerColumn, HorizontalColumn, SecondHorizontalColumn, H1, H4 } from './ContactFormElements';

const ContactForm = () => {
    const [formData, setFormData] = useState({})

    const updateInput = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

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
                            <form>
                               <FirstInnerColumn>
                                    <H4>
                                        <div>
                                            <label>First Name</label>
                                            <input 
                                                type="text"
                                                name="firstName"
                                                placeholder="First Name"
                                                onChange={updateInput}
                                                value={formData.firstName || ''}
                                            />
                                        </div>
                                        <div>
                                            <label>Last Name</label>
                                            <input 
                                                type="text"
                                                name="lastName"
                                                placeholder="Last Name"
                                                onChange={updateInput}
                                                value={formData.lasttName || ''}
                                            />
                                        </div>
                                    </H4>
                               </FirstInnerColumn>
                               <SecondInnerColumn>
                                    <H4>
                                        <form>
                                            <label>
                                                Phone Number
                                                <input type="tel" name="phone-number" placeholder="Phone Number" />
                                            </label>
                                        </form>
                                        <form>
                                            <label>
                                                Email
                                                <input type="email" name="email" placeholder="Email" />
                                            </label>
                                        </form>
                                    </H4>
                               </SecondInnerColumn>
                               <HorizontalColumn>
                                    <H4>
                                        <form>
                                        <div>
                                            <label>
                                                Question
                                                <input type="radio" name="contact-type" />
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                Concern
                                                <input type="radio" name="contact-type" />
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                Feedback
                                                <input type="radio" name="contact-type" />
                                            </label>
                                            </div>
                                        </form>
                                    </H4>
                               </HorizontalColumn>
                               <SecondHorizontalColumn>
                                    <H4>
                                        <form>
                                            <label>
                                                Message    
                                                <input type="textarea" name="message-text" placeholder="Please leave your feedback in this form" />
                                            </label>
                                        </form>
                                    </H4>
                               </SecondHorizontalColumn>
                               <form>
                                   <label>
                                       <input type="submit" value="Submit" />
                                   </label>
                               </form>
                               </form>
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