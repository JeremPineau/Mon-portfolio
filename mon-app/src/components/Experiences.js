import React from 'react';
import IyaLimited from '../assets/about-me/experiences/internship2/iya-limited.png';
import Vietnam from '../assets/about-me/experiences/internship2/vietnam.png';
import Simastock from '../assets/about-me/experiences/warehouseman/simastock.png';
import Manutentionnaire from '../assets/about-me/experiences/warehouseman/manutentionnaire.png';
import Wienerberger from '../assets/about-me/experiences/production-worker/wienerberger.png';
import AgentDeProduction from '../assets/about-me/experiences/production-worker/agent-de-production.jpg';
import NordFranceConstructions from '../assets/about-me/experiences/internship1/nord-france-constructions.jpg';

const Experiences = () => {
    return (
        <div className="experiences">
            <h2 data-aos="fade-up">Mes experiences professionnelles</h2>
            <div id="internship2" data-aos="fade-up">
                <h3>IYA Limited</h3>
                <div class="pics">
                    <img src={IyaLimited} alt="iya-limited" width={'40%'} />
                    <img src={Vietnam} alt="vietnam" width={'15%'} />
                </div>
                <p><span>Date :</span> 06/2021 - 08/2021</p>
                <p><span>Poste :</span> Stagiaire en développement web</p>
                <p><span>Lieu :</span> Hô Chi Minh-Ville (Viêt Nam)</p>
                <p class="underline">Description :</p>
                <div class="gap">
                    <p>Création d'une application en Laravel permettant de centraliser toutes les activités et modules étant essentiels et utiles à l'entreprise IYA Limited.</p>
                </div>
            </div> 
            <div id="warehouseman" data-aos="fade-up">
                <h3>SIMASTOCK</h3>
                <div class="pics">
                    <img src={Simastock} alt="simastock" width={'40%'} />
                    <img src={Manutentionnaire} alt="manutentionnaire" width={'25%'} />
                </div>
                <p><span>Date :</span> 03/2017 - 08/2017</p>
                <p><span>Poste :</span> Manutentionnaire</p>
                <p><span>Lieu :</span> Sin-le-Noble - Dechy - Hénin-Beaumont - Lauwin-planque - Orchies</p>
                <p class="underline">Description :</p>
                <div class="gap">
                    <p>❍ Chargement / déchargement de containers</p>
                    <p>❍ Conditionnement, palettisation</p>
                    <p>❍ Picking, nettoyage</p>
                </div>
            </div>
            <div id="production-worker" data-aos="fade-up">
                <h3>Wienerberger</h3> 
                <div class="pics">
                    <img src={Wienerberger} alt="wienerberger" width={'40%'} />
                    <img src={AgentDeProduction} alt="agent-de-production" width={'35%'} />
                </div>
                <p><span>Date :</span> 11/2016 - 12/2016</p>
                <p><span>Poste :</span> Agent de production</p>
                <p><span>Lieu :</span> Flines-lez-Raches</p>
                <p class="underline">Description :</p>
                <div class="gap">
                    <p>❍ Manutention de briques sur four</p>
                    <p>❍ Contrôle visuel</p>
                    <p>❍ Conditionnement</p>
                </div>
            </div>
            <div id="internship1" data-aos="fade-up">
                <h3>Nord France Constructions</h3>
                <div class="pics">
                    <img src={NordFranceConstructions} alt="nord-france-constructions" width={'60%'} />
                </div>
                <p><span>Date :</span> 05/2015 - 07/2015</p>
                <p><span>Poste :</span> Stagiaire assistant chef de chantier</p>
                <p><span>Lieu :</span> sur chantier à Lille</p>
                <p class="underline">Description :</p>
                <div class="gap">
                    <p>❍ Découverte des différents corps de métier liés au btp avec les équipes (coffreurs, bancheurs, ferrailleurs, poseurs de prémurs)</p>
                    <p>❍ Rangement de matériels / nettoyage</p>
                    <p>❍ Participation aux OPPBTP (prévention)</p>
                    <p>❍ Tenue du journal de chantier</p> 
                </div>
                <div id="info">
                    <a href="https://www.adele.org/residence/2480/maison-blanche-2480/lille-59" target="_blank" rel="noreferrer">Pour plus d'informations à propos du projet</a>
                </div>
            </div>
        </div> 
    );
};

export default Experiences;