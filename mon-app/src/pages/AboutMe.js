import React from 'react';
import Navigation from '../components/Navigation';

/* career */
import Epsi from '../assets/about-me/career/licence/epsi.png';
import Devops from '../assets/about-me/career/licence/devops.jpg';
import IUTLens from '../assets/about-me/career/dut/iut-lens.png';
import IUTAmiens from '../assets/about-me/career/dut/iut-amiens.png';
import DUTInformatique from '../assets/about-me/career/dut/dut-informatique.png';
import LyceeJeanProuve from '../assets/about-me/career/bts/lycee-jean-prouve.png';
import BTSbatiment from '../assets/about-me/career/bts/bts-batiment.jpg';

/* experiences */
import IyaLimited from '../assets/about-me/experiences/internship2/iya-limited.png';
import Vietnam from '../assets/about-me/experiences/internship2/vietnam.png';
import Simastock from '../assets/about-me/experiences/warehouseman/simastock.jpg';
import Manutentionnaire from '../assets/about-me/experiences/warehouseman/manutentionnaire.jpg';
import Wienerberger from '../assets/about-me/experiences/production-worker/wienerberger.png';
import AgentDeProduction from '../assets/about-me/experiences/production-worker/agent-de-production.jpg';
import NordFranceConstructions from '../assets/about-me/experiences/internship1/nord-france-constructions.png';



const AboutMe = () => {
    return (
        <div className="about-me">
            <Navigation />
            <h1>À propos de moi</h1> 
            <div id="section">
                
                <h2>Mon parcours</h2>
                <div id="career-list">
                    <div class="career">
                        <h3>2021 - 2022</h3>
                        <h3>EPSI, Lille</h3>
                        <img class="pic" src={Epsi} alt="epsi" />	
                        <img class="pic" src={Devops} alt="devops" />
                        <p>Bachelor informatique</p>
                        <p class="italic">Concepteur développeur d'application / Concepteur intégrateur DEVOPS</p>
                    </div>
                    <div class="career">
                        <h3>2018 - 2021</h3>
                        <h3>IUT de Lens et d'Amiens</h3>
                        <img id="iut-amiens" src={IUTAmiens} alt="iut-amiens" />
                        <img class="pic" src={IUTLens} alt="iut-lens" />	
                        <img class="pic" src={DUTInformatique} alt="dut-informatique" />
                        <p>DUT informatique</p>
                    </div>
                    <div class="career">
                        <h3>2014 - 2016</h3>
                        <h3>Lycée Jean Prouvé, Lomme</h3>
                        <img class="pic" src={LyceeJeanProuve} alt="lycee-jean-prouve" />	
                        <img id="bts-batiment" src={BTSbatiment} alt="bts-batiment" />
                        <p>BTS bâtiment</p>
                    </div>
                </div>

                <h2>Mes experiences professionnelles</h2>
                <div id="experiences-list">
                    <div class="experiences">
                        <h3>IYA Limited</h3>
                        <img class="pic0" src={IyaLimited} alt="iya-limited" />
                        <img id="vietnam" src={Vietnam} alt="vietnam" />
					    <p>3 Juin 2021</p> 
                        <p><span>Date :</span> 06/2021 - 08/2021</p>
                        <p><span>Poste :</span> Stagiaire en développement web</p>
                        <p><span>Lieu :</span> Hô Chi Minh-Ville (Viêt Nam)</p>
                        <p>Créer une application en Laravel permettant de centraliser toutes les activités et modules étant essentiels et utiles à l'entreprise IYA Limited. Ceux-ci étant :</p>
                        <p>❍ Permettre aux utilisateurs de se connecter à leur compte, et, s’ils n’en possèdent pas, faire une demande aux admin du site pour en obtenir un.</p>
                        <p>❍ Permettre aux clients de s’abonner aux différents services du site, de résilier leur abonnement quand ils le souhaitent (selon les conditions du contrat).</p>
                        <p>❍ Fonctionnalité de pings accessible à n'importe qui.</p>
                        <p>❍ Permettre aux admininistrateurs de gérer les droits des clients quand ils le souhaitent, de rétrograder des personnes, …</p>
                        <p>❍ Permettre aux administrateurs et aux utilisateurs de pouvoir ajouter et consulter une facture. Ils peuvent aussi procéder au paiement de celle-ci.</p>
                        <p>❍ Permettre aux utilisateurs de pouvoir créer des sous-utilisateurs.</p>
                        <p>❍ Rédaction d'un document de spécification: c'est-à-dire réaliser des diagrammes d'activité, diagrammes de cas d'utilisation, dictionnaires de données, wireframes pour chaque fonctionnalité.</p>
                        <p>❍ Rédaction d'un guide d'utilisation du site.</p> 
					</div> 
					<div class="experiences">
                        <h3>SIMASTOCK</h3>
                        <img class="pic0" src={Simastock} alt="simastock" />
                        <img id="manutentionnaire" src={Manutentionnaire} alt="manutentionnaire" />
                        <p>Mars 2017</p>
                        <p><span>Date :</span> 03/2017 - 08/2017</p>
                        <p><span>Poste :</span> Manutentionnaire</p>
                        <p><span>Lieu :</span> Sin-le-Noble - Dechy - Hénin-Beaumont - Lauwin-planque - Orchies</p>
                        <p>❍ Chargement / déchargement de containers</p>
                        <p>❍ Conditionnement, palettisation</p>
                        <p>❍ Picking, nettoyage</p>
					</div>
					<div class="experiences">
                        <h3>Wienerberger</h3> 
                        <img class="pic0" src={Wienerberger} alt="wienerberger" />
                        <img class="pic0" src={AgentDeProduction} alt="agent-de-production" />
                        <p>Novembre 2016</p>
                        <p><span>Date :</span> 11/2016 - 12/2016</p>
                        <p><span>Poste :</span> Agent de production</p>
                        <p><span>Lieu :</span> Flines-lez-Raches</p>
                        <p>❍ Manutention de briques sur four</p>
                        <p>❍ Contrôle visuel</p>
                        <p>❍ Conditionnement</p>
					</div>
					<div class="experiences">
                        <h3>Nord France Constructions</h3> 
                        <img class="pic0" src={NordFranceConstructions} alt="nord-france-constructions" />
                        <p>11 mai 2015</p> 
                        <p><span>Date :</span> 05/2015 - 07/2015</p>
                        <p><span>Poste :</span> Stagiaire assistant chef de chantier</p>
                        <p><span>Lieu :</span> sur chantier à Lille</p>
                        <p>❍ Découverte des différents corps de métier liés au btp avec les équipes (coffreurs, bancheurs, ferrailleurs, poseurs de prémurs)</p>
                        <p>❍ Rangement de matériels / nettoyage</p>
                        <p>❍ Participation aux OPPBTP (prévention)</p>
                        <p>❍ Tenue du journal de chantier</p> 
                        <a href="https://www.adele.org/residence/2480/maison-blanche-2480/lille-59" target="_blank" class="btn-experiences">Pour plus d'informations</a>
					</div>
                </div> 
            </div>
        </div>
    );
};

export default AboutMe;