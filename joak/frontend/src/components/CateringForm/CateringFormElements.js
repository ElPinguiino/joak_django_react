import styled from 'styled-components';
import cateringmenu from '../../images/onlinecatering.png'

export const CateringFormContainer = styled.div`
    background-color: #016060;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`
/* This is the container holding the menu */
export const CateringFormWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 900px;
    width: 100%;
    padding-top: 80px;
    max-width: 773px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
`
export const CateringFormImageContainer = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 700px;
`
export const Image = styled.image`
    background-image: url('/Users/juanaguilera/Desktop/Developing/juan-of-a-kind/django-joak/joak-django/joak/react-website-youtube/src/images/onlinecatering.png');
`
export const H1 = styled.h1`
    margin-bottom: 24px;
    font-size: 24px;
    line-height: 1.1;
    font-weight: 600;
    color: blue;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
