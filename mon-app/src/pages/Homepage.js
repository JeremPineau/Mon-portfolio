import React from 'react';
import Jeremie from '../assets/homepage/jeremie.png';
import Navigation from '../components/Navigation';
import FooterFixed from '../components/FooterFixed';

const Homepage = () => {
    return (
        <div className="homepage">
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
            <Navigation />
            <h1>Bienvenue sur mon portfolio !</h1>

            <div id="section">
                <div id="presentation">
                    <div id="jeremie">
                        <img src={Jeremie} alt="jeremie" width={'50%'} />
                    </div>
                    <div id="description">
                        <h3>Jérémie Pineau</h3> 
                        <p>Passionné par le développement web, je souhaiterais vivre de ma passion.</p>
                        <p>Mes diverses expériences m'ont apporté beaucoup de connaissances que je souhaite, aujourd'hui, mettre à contribution en intégrant une équipe de développeurs.</p>
                        <p>Motivation, perfectionnisme et soif d'apprendre sont les adjectifs qui me définissent le mieux, comme en témoigne mon parcours scolaire atypique.</p>
                    </div>
                </div>
            </div>
            <FooterFixed />
        </div>
    );
};

export default Homepage;