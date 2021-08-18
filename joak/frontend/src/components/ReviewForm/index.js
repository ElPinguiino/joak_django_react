import React, { useState } from 'react';
import { ReviewFormContainer, ReviewFormWrapper, ReviewFormContent, ReviewFormFormField } from './ReviewFormElements';
import Form from './Form';
import ShowReviews from './ShowReviews';

const ReviewForm = () => {
    return (
        <>
            <ReviewFormContainer>
                <ReviewFormWrapper>
                    <ReviewFormContent>
                        <ShowReviews />
                    </ReviewFormContent>
                    <ReviewFormFormField>
                        <Form />
                    </ReviewFormFormField>
                </ReviewFormWrapper>
            </ReviewFormContainer>
        </>
    )
}

export default ReviewForm
