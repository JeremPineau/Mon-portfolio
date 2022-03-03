import React from 'react';
import VideoGames from '../assets/about-me/hobbies/jeux-video.png';
import ComputerScience from '../assets/about-me/hobbies/informatique.png';
import Drawing from '../assets/about-me/hobbies/dessin.png';
import Cinema from '../assets/about-me/hobbies/cinema.png';
import Karting from '../assets/about-me/hobbies/karting.png';
import Cuisine from '../assets/about-me/hobbies/cuisine.png';
import Music from '../assets/about-me/hobbies/musique.png';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <div id="hobbies-list">
                <h2>Mes centres d'intérêt</h2>
                <div id="hobbies">
                    <img src={VideoGames} alt="jeux-video" width={'15%'} title="Les jeux-vidéo" />&emsp;
                    <img src={ComputerScience} alt="informatique" width={'10%'} title="L'informatique" />&emsp;
                    <img src={Drawing} alt="dessin" width={'10%'} title="Le dessin" />&emsp;
                    <img src={Cinema} alt="cinema" width={'10%'} title="Le cinéma" />&emsp;
                    <img src={Karting} alt="karting" width={'10%'} title="Le karting" />&emsp;
                    <img src={Cuisine} alt="cuisine" width={'10%'} title="La cuisine" />&emsp;
                    <img src={Music} alt="musique" width={'10%'} title="La musique" />
                </div>
            </div>
        </div>
    );
};

export default Hobbies;