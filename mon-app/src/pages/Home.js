import React from 'react';
import Navigation from '../components/Navigation';
import Jeremie from '../assets/home/jeremie.png'; 
import FooterFixed from '../components/FooterFixed';

const Home = () => {
    return (
        <div className="home">
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
                        <a href="https://drive.google.com/file/d/1YHtNk63Ix25e5bhmRLf4R1sRq8WLYxY1/view?usp=sharing" target="_blank" rel="noreferrer">Accéder à mon CV</a>
                    </div>
                </div>
            </div>
            <FooterFixed />
        </div>
    );
};

export default Home;