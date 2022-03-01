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

/* skills */
import France from '../assets/about-me/skills/languages/france.png';
import Angleterre from '../assets/about-me/skills/languages/angleterre.jpg';
import USA from '../assets/about-me/skills/languages/usa.jpg';
import Espagne from '../assets/about-me/skills/languages/espagne.jpg';
import CCpp from '../assets/about-me/skills/programming-languages/programming/c-cpp.png';
import CSharp from '../assets/about-me/skills/programming-languages/programming/csharp.png';
import Python from '../assets/about-me/skills/programming-languages/programming/python.png';
import Java from '../assets/about-me/skills/programming-languages/programming/java.png';
import HtmlCss from '../assets/about-me/skills/programming-languages/web/html-css.png';
import Php from '../assets/about-me/skills/programming-languages/web/php.png';
import Laravel from '../assets/about-me/skills/programming-languages/web/laravel.png';
import Angular from '../assets/about-me/skills/programming-languages/web/angular.png';
import ReactJS from '../assets/about-me/skills/programming-languages/web/react-js.png';
import JavaScript from '../assets/about-me/skills/programming-languages/web/javascript.png';
import TypeScript from '../assets/about-me/skills/programming-languages/web/typescript.png';
import XAML from '../assets/about-me/skills/programming-languages/graphical-interfaces/xaml.png';
import VisualBasic from '../assets/about-me/skills/programming-languages/graphical-interfaces/visual-basic.png';
import PythonTkinter from '../assets/about-me/skills/programming-languages/graphical-interfaces/python-tkinter.jpg';
import MySQL from '../assets/about-me/skills/programming-languages/databases/mysql.png';
import PostgreSQL from '../assets/about-me/skills/programming-languages/databases/postgresql.png';
import NoSQL from '../assets/about-me/skills/programming-languages/databases/nosql.png';
import VisualStudioCode from '../assets/about-me/skills/softwares/programming/visual-studio-code.png';
import VisualStudio from '../assets/about-me/skills/softwares/programming/visual-studio.png';
import IntelliJ from '../assets/about-me/skills/softwares/programming/intellij.png';
import PhpStorm from '../assets/about-me/skills/softwares/programming/php-storm.png';
import Git from '../assets/about-me/skills/softwares/programming/git.png';
import Trello from '../assets/about-me/skills/softwares/organization-tools/trello.png';
import JiraSoftware from '../assets/about-me/skills/softwares/organization-tools/jira-software.png';
import AutoCAD from '../assets/about-me/skills/softwares/architecture/autocad.png';
import RevitArchitecture from '../assets/about-me/skills/softwares/architecture/revit-architecture.png';
import SketchUp from '../assets/about-me/skills/softwares/architecture/sketchup.png';

const AboutMe = () => {
    return (
        <div className="about-me">
            <Navigation />
            <h1>À propos de moi</h1> 
            <div id="section">
                
                <h2>Mon parcours</h2>
                <div id="career-list">
                    <div id="licence">
                        <h3>2021 - 2022</h3>
                        <h3>EPSI, Lille</h3>
                        <img src={Epsi} alt="epsi" width={'30%'} />	
                        <img src={Devops} alt="devops" width={'30%'} />
                        <p>Bachelor informatique</p>
                        <p class="italic">Concepteur développeur d'application / Concepteur intégrateur DEVOPS</p>
                    </div>
                    <div id="dut">
                        <h3>2018 - 2021</h3>
                        <h3>IUT de Lens et d'Amiens</h3>
                        <img src={IUTAmiens} alt="iut-amiens" width={'15%'} />
                        <img src={IUTLens} alt="iut-lens" width={'30%'} />	
                        <img src={DUTInformatique} alt="dut-informatique" width={'30%'} />
                        <p>DUT informatique</p>
                    </div>
                    <div id="bts">
                        <h3>2014 - 2016</h3>
                        <h3>Lycée Jean Prouvé, Lomme</h3>
                        <img src={LyceeJeanProuve} alt="lycee-jean-prouve" width={'30%'} />	
                        <img src={BTSbatiment} alt="bts-batiment" width={'20%'} />
                        <p>BTS bâtiment</p>
                    </div>
                </div>

                <h2>Mes experiences professionnelles</h2>
                <div id="experiences-list">
                    <div id="internship2">
                        <h3>IYA Limited</h3>
                        <img src={IyaLimited} alt="iya-limited" width={'10%'} />
                        <img src={Vietnam} alt="vietnam" width={'5%'} />
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
					<div id="warehouseman">
                        <h3>SIMASTOCK</h3>
                        <img src={Simastock} alt="simastock" width={'15%'} />
                        <img src={Manutentionnaire} alt="manutentionnaire" width={'10%'} />
                        <p>Mars 2017</p>
                        <p><span>Date :</span> 03/2017 - 08/2017</p>
                        <p><span>Poste :</span> Manutentionnaire</p>
                        <p><span>Lieu :</span> Sin-le-Noble - Dechy - Hénin-Beaumont - Lauwin-planque - Orchies</p>
                        <p>❍ Chargement / déchargement de containers</p>
                        <p>❍ Conditionnement, palettisation</p>
                        <p>❍ Picking, nettoyage</p>
					</div>
					<div id="production-worker">
                        <h3>Wienerberger</h3> 
                        <img src={Wienerberger} alt="wienerberger" width={'15%'} />
                        <img src={AgentDeProduction} alt="agent-de-production" width={'15%'} />
                        <p>Novembre 2016</p>
                        <p><span>Date :</span> 11/2016 - 12/2016</p>
                        <p><span>Poste :</span> Agent de production</p>
                        <p><span>Lieu :</span> Flines-lez-Raches</p>
                        <p>❍ Manutention de briques sur four</p>
                        <p>❍ Contrôle visuel</p>
                        <p>❍ Conditionnement</p>
					</div>
					<div id="internship1">
                        <h3>Nord France Constructions</h3> 
                        <img src={NordFranceConstructions} alt="nord-france-constructions" width={'15%'} />
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

                <div id="skills-list">
				    <h2>Mes compétences</h2>
				    <div id="languages">
					    <h3>Langues</h3>					
                        <img src={France} alt="france" title="Français (courant)" />
                        <img src={Angleterre} alt="angleterre" title="Anglais (niveau B2)" />
                        <img src={USA} alt="usa" title="Anglais (niveau B2)" />
                        <img src={Espagne} alt="espagne" title="Espagnol (notions)" /> 
				    </div>
				    <div id="programming-languages">
					    <h3>Langages de programmation</h3>
                        <div class="skills">
                            <span>Programmation :</span>
                            <img src={CCpp} alt="c-cpp" title="C/C++" />
                            <img src={CSharp} alt="csharp" title="C#" />
                            <img src={Python} alt="python" title="Python" />
                            <img src={Java} alt="java" title="Java" />
                            </div>
                        <div class="skills">
                            <span>Web :</span>
                            <img src={HtmlCss} alt="html-css" title="HTML/CSS" />
                            <img src={Php} alt="php" title="PHP" />
                            <img src={Laravel} alt="laravel" title="Laravel" />
                            <img src={Angular} alt="angular" title="Angular" />
                            <img src={ReactJS} alt="react-js" title="React.js" />
                            <img src={JavaScript} alt="javascript" title="JavaScript" />
                            <img src={TypeScript} alt="typescript" title="TypeScript" />
                            </div>
                        <div class="skills">
                            <span>Interfaces graphiques :</span>
                            <img src={XAML} alt="xaml" title="XAML" />
                            <img src={VisualBasic} alt="visual-basic" title="Visual Basic" />
                            <img src={PythonTkinter} alt="python-tkinter" title="Tkinter" />
                        </div>
                        <div class="skills">
                            <span>Bases de données :</span>
                            <img src={MySQL} alt="mysql" title="MySQL" />
                            <img src={PostgreSQL} alt="postgresql" title="PostgreSQL" />
                            <img src={NoSQL} alt="nosql" title="NoSQL" />			
                        </div>
                    </div>
                    <div id="softwares">
                        <h3>Logiciels</h3>
                        <div class="skills">
					        <span>Developpement informatique :</span>
                            <img src={VisualStudioCode} alt="visual-studio-code" title="Visual Studio Code" />
                            <img src={VisualStudio} alt="visual-studio" title="Visual Studio" />
                            <img src={IntelliJ} alt="intellij" title="IntelliJ IDEA" />
                            <img src={PhpStorm} alt="php-storm" title="PHP Storm" />
                            <img src={Git} alt="git" title="Git" />
                        </div>
                        <div class="skills">
                            <span>Outils d'organisation :</span>
                            <img src={Trello} alt="trello" title="Trello" />
                            <img src={JiraSoftware} alt="jira-software" title="Jira software" />
                        </div>
                        <div class="skills">
                            <span>Architecture :</span> 
                            <img src={AutoCAD} alt="autocad" title="AutoCAD" />
                            <img src={RevitArchitecture} alt="revit-architecture" title="Revit Architecture" />	
                            <img src={SketchUp} alt="sketchup" title="SketchUp" />		
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;