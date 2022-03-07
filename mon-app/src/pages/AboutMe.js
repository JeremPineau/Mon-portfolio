import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import Ordinateur from '../assets/about-me/ordinateur.jpg';
import Navigation from '../components/Navigation';
import Career from '../components/Career';
import Experiences from '../components/Experiences';
import Skills from '../components/Skills';
import Hobbies from '../components/Hobbies';
import ScrollButton from '../components/ScrollButton';
import FooterRelative from '../components/FooterRelative';


const AboutMe = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
    return (
        <div className="about-me">
            <Navigation />
            <h1>À propos de moi</h1>  
            <div id="section">
                <div id="about">
                    <p>Je vous présente mon parcours scolaire, mes expériences professionnelles, mes compétences ainsi que mes centres d'intérêt.</p>
                    <img src={Ordinateur} alt="a-propos-de-moi" width={'50%'} />
                </div>
                <Career />
                <Experiences />
                <Skills />
                <Hobbies />
                <ScrollButton />
            </div>
            <FooterRelative />
        </div>
    );
};

export default AboutMe;