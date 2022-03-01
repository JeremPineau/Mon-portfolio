import React from 'react';
import Navigation from '../components/Navigation';
import Jeremie from '../assets/homepage/jeremie.png';

const Homepage = () => {
    return (
        <div className="homepage">
            <Navigation />
            <h1>Bienvenue sur mon portfolio !</h1>

            <div id="section">
                <div id="presentation">
                    <div id="jeremie">
                        <img src={Jeremie} alt="jeremie" width={'60%'} />
                    </div>
                    <div id="description">
                        <h2>Jérémie Pineau</h2> 
                        <p>Passionné par le développement web, je souhaiterais vivre de ma passion.</p>
                        <p>Mes diverses expériences m'ont apporté beaucoup de connaissances que je souhaite, aujourd'hui, mettre à contribution en intégrant une équipe de devéloppeurs.</p>
                        <p>Motivation, perfectionnisme et soif d'apprendre sont les adjectifs qui me définissent le mieux, comme en témoigne mon parcours scolaire plutôt atypique.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;