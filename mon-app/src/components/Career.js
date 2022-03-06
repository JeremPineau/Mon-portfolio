import React from 'react';
import Epsi from '../assets/about-me/career/licence/epsi.png';
import Devops from '../assets/about-me/career/licence/devops.jpg';
import IUTLens from '../assets/about-me/career/dut/iut-lens.png';
import IUTAmiens from '../assets/about-me/career/dut/iut-amiens.png';
import DUTInformatique from '../assets/about-me/career/dut/dut-informatique.png';
import LyceeJeanProuve from '../assets/about-me/career/bts/lycee-jean-prouve.png';
import BTSbatiment from '../assets/about-me/career/bts/bts-batiment.jpg';

const Career = () => {
    return (
        <div className="career">
            <div id="career-list">
                <h2 data-aos="fade-up">Mon parcours</h2>
                <div id="licence" data-aos="fade-up">
                    <h3>2021 - 2022</h3>
                    <h3>EPSI, Lille</h3>
                    <img src={Epsi} alt="epsi" width={'40%'} />	
                    <img src={Devops} alt="devops" width={'40%'} />
                    <p>Bachelor informatique</p>
                    <p class="italic">Concepteur développeur d'application / Concepteur intégrateur DEVOPS</p>
                </div>
                <div id="dut" data-aos="fade-up">
                    <h3>2018 - 2021</h3>
                    <h3>IUT de Lens et d'Amiens</h3>
                    <img src={IUTAmiens} alt="iut-amiens" width={'17.5%'} />
                    <img src={IUTLens} alt="iut-lens" width={'30%'} />	
                    <img src={DUTInformatique} alt="dut-informatique" width={'50%'} />
                    <p>DUT informatique</p>
                </div>
                <div id="bts" data-aos="fade-up">
                    <h3>2014 - 2016</h3>
                    <h3>Lycée Jean Prouvé, Lomme</h3>
                    <img src={LyceeJeanProuve} alt="lycee-jean-prouve" width={'30%'} />&emsp;	
                    <img src={BTSbatiment} alt="bts-batiment" width={'25%'} />
                    <p>BTS bâtiment</p>
                </div>
            </div>
        </div>
    );
};

export default Career;