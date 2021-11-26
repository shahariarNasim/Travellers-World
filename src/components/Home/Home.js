import React from 'react';
import Banner from '../Banner/Banner';
import Reviwers from '../Reviewers/Reviewers';
import Services from '../Services/Services';
import Values from '../Values/Values';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Values></Values>
            <Reviwers></Reviwers>
        </div>
    );
};

export default Home;