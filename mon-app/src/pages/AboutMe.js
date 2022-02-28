import React from 'react';
import Navigation from '../components/Navigation';
import Epsi from '../assets/about-me/career/licence/epsi.png';
import Devops from '../assets/about-me/career/licence/devops.jpg';
import IUTLens from '../assets/about-me/career/dut/iut-lens.png';
import IUTAmiens from '../assets/about-me/career/dut/iut-amiens.png';
import DUTInformatique from '../assets/about-me/career/dut/dut-informatique.png';
import LyceeJeanProuve from '../assets/about-me/career/bts/lycee-jean-prouve.png';
import BTSbatiment from '../assets/about-me/career/bts/bts-batiment.jpg';



const AboutMe = () => {
    return (
        <div className="about-me">
            <Navigation />
            <h1>À propos de moi</h1> 
            <div id="section">
            <h2>Mon parcours</h2>
                <div id="parcours-list">
                    <div class="parcours">
                        <h3>2021 - 2022</h3>
                        <h3>EPSI, Lille</h3>
                        <img class="image" src={Epsi} alt="epsi" />	
                        <img class="image" src={Devops} alt="devops" />
                        <p>Bachelor informatique</p>
                        <p class="italic">Concepteur développeur d'application / Concepteur intégrateur DEVOPS</p>
                    </div>
                    <div class="parcours">
                        <h3>2018 - 2021</h3>
                        <h3>IUT de Lens et d'Amiens</h3>
                        <img id="iut-amiens" src={IUTAmiens} alt="iut-amiens" />
                        <img class="image" src={IUTLens} alt="iut-lens" />	
                        <img class="image" src={DUTInformatique} alt="dut-informatique" />
                        <p>DUT informatique</p>
                    </div>
                    <div class="parcours">
                        <h3>2014 - 2016</h3>
                        <h3>Lycée Jean Prouvé, Lomme</h3>
                        <img class="image" src={LyceeJeanProuve} alt="lycee-jean-prouve" />	
                        <img id="bts-batiment" src={BTSbatiment} alt="bts-batiment" />
                        <p>BTS bâtiment</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutMe;