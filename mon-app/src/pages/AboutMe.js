import React from 'react';
import Navigation from '../components/Navigation';
import Career from '../components/Career';
import Experiences from '../components/Experiences';
import Skills from '../components/Skills';
import ScrollButton from '../components/ScrollButton';
import FooterRelative from '../components/FooterRelative';


const AboutMe = () => {
    return (
        <div className="about-me">
            <Navigation />
            <h1>À propos de moi</h1> 
            
            <div id="section">    
                <Career />
                <Experiences />
                <Skills />
                <ScrollButton />
            </div>
            <FooterRelative />
        </div>
    );
};

export default AboutMe;