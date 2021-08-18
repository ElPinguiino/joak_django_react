import React, { useState } from 'react'
import { CateringFormContainer, CateringFormImageContainer, CateringFormWrapper, H1, Image } from './CateringFormElements'
import cateringmenu from '../../images/onlinecatering.png'
import DatePicker from 'react-datetime-picker';
import Form from './Form'

const CateringForm = () => {

    return (
        <>
            <CateringFormContainer>
                <CateringFormWrapper>
                    <CateringFormImageContainer>
                        <Image>
                            <Form />
                        </Image>
                    </CateringFormImageContainer>
                </CateringFormWrapper>
            </CateringFormContainer>
        </>
    )
}

export default CateringForm
