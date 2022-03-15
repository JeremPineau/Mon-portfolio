import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import Navigation from '../components/Navigation';
import Diversity from '../assets/my-achievements/diversity.png';
import Projects from '../components/Projects';
import ScrollButton from '../components/ScrollButton';
import FooterRelative from '../components/FooterRelative';

const MyAchievements = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
    return (
        <div className="my-achievements">
            <Navigation />
            <h1>Mes réalisations</h1>          
            <div id="section">
                <div id="diversity">
                    <p>Comme j'aime la diversité dans mes relations, j'ai décidé d'associer un pays à chacun de mes projets.</p>
                    <img src={Diversity} alt="diversity" width={'40%'} />
                </div>
                <Projects />
            </div> 
            <ScrollButton />
            <FooterRelative />
        </div>
    );
};

export default MyAchievements;