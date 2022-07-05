import React from 'react'
// import { Link } from "react-router-dom";
import Banner from './Carousel'
import SingleLineImageList from './RecommendedMovies'
import Container from '@material-ui/core/Container';
import CoindcxImage from '../sourceImage/coindcxpresents.avif'
import TheBestOfEntertenment from './TheBestOfEntertenment'
import Premieres from './Premieres'

function Home() {
    return (
        <>
                <Banner />
                <img src={CoindcxImage} alt="coin poster" style={{ marginTop: '1.5rem', width: '100%' }} />
                <Container maxWidth="lg">
                    <SingleLineImageList />
                    <TheBestOfEntertenment />
                </Container>
                <Premieres /> 
        </>
    )
}

export default Home;