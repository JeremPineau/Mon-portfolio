import React from 'react';
import Navigation from '../components/Navigation';
import FooterRelative from '../components/FooterRelative';

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
import NordFranceConstructions from '../assets/about-me/experiences/internship1/nord-france-constructions.jpg';

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
                <div id="career-list">
                <h2>Mon parcours</h2>
                    <div id="licence">
                        <h3>2021 - 2022</h3>
                        <h3>EPSI, Lille</h3>
                        <img src={Epsi} alt="epsi" width={'40%'} />	
                        <img src={Devops} alt="devops" width={'40%'} />
                        <p>Bachelor informatique</p>
                        <p class="italic">Concepteur développeur d'application / Concepteur intégrateur DEVOPS</p>
                    </div>
                    <div id="dut">
                        <h3>2018 - 2021</h3>
                        <h3>IUT de Lens et d'Amiens</h3>
                        <img src={IUTAmiens} alt="iut-amiens" width={'17.5%'} />
                        <img src={IUTLens} alt="iut-lens" width={'30%'} />	
                        <img src={DUTInformatique} alt="dut-informatique" width={'50%'} />
                        <p>DUT informatique</p>
                    </div>
                    <div id="bts">
                        <h3>2014 - 2016</h3>
                        <h3>Lycée Jean Prouvé, Lomme</h3>
                        <img src={LyceeJeanProuve} alt="lycee-jean-prouve" width={'30%'} />&emsp;	
                        <img src={BTSbatiment} alt="bts-batiment" width={'25%'} />
                        <p>BTS bâtiment</p>
                    </div>
                </div>

                
                <div id="experiences-list">
                <h2>Mes experiences professionnelles</h2>
                    <div id="internship2">
                        <h3>IYA Limited</h3>
                        <div class="pics">
                            <img src={IyaLimited} alt="iya-limited" width={'40%'} />
                            <img src={Vietnam} alt="vietnam" width={'25%'} />
                        </div>
					    <p>3 juin 2021</p> 
                        <p><span>Date :</span> 06/2021 - 08/2021</p>
                        <p><span>Poste :</span> Stagiaire en développement web</p>
                        <p><span>Lieu :</span> Hô Chi Minh-Ville (Viêt Nam)</p>
                        <p>Création d'une application en Laravel permettant de centraliser toutes les activités et modules étant essentiels et utiles à l'entreprise IYA Limited.</p>
                        <p>Voir <a href="/my-achievements">mes réalisations</a></p>
					</div> 
					<div id="warehouseman">
                        <h3>SIMASTOCK</h3>
                        <div class="pics">
                            <img src={Simastock} alt="simastock" width={'40%'} />
                            <img src={Manutentionnaire} alt="manutentionnaire" width={'25%'} />
                        </div>
                        <p>Mars 2017</p>
                        <p><span>Date :</span> 03/2017 - 08/2017</p>
                        <p><span>Poste :</span> Manutentionnaire</p>
                        <p><span>Lieu :</span> Sin-le-Noble - Dechy - Hénin-Beaumont - Lauwin-planque - Orchies</p>
                        <div class="gap">
                            <p>❍ Chargement / déchargement de containers</p>
                            <p>❍ Conditionnement, palettisation</p>
                            <p>❍ Picking, nettoyage</p>
                        </div>
					</div>
					<div id="production-worker">
                        <h3>Wienerberger</h3> 
                        <div class="pics">
                            <img src={Wienerberger} alt="wienerberger" width={'40%'} />
                            <img src={AgentDeProduction} alt="agent-de-production" width={'35%'} />
                        </div>
                        <p>Novembre 2016</p>
                        <p><span>Date :</span> 11/2016 - 12/2016</p>
                        <p><span>Poste :</span> Agent de production</p>
                        <p><span>Lieu :</span> Flines-lez-Raches</p>
                        <div class="gap">
                            <p>❍ Manutention de briques sur four</p>
                            <p>❍ Contrôle visuel</p>
                            <p>❍ Conditionnement</p>
                        </div>
					</div>
					<div id="internship1">
                        <h3>Nord France Constructions</h3>
                        <div class="pics">
                            <img src={NordFranceConstructions} alt="nord-france-constructions" width={'60%'} />
                        </div>
                        <p>11 mai 2015</p> 
                        <p><span>Date :</span> 05/2015 - 07/2015</p>
                        <p><span>Poste :</span> Stagiaire assistant chef de chantier</p>
                        <p><span>Lieu :</span> sur chantier à Lille</p>
                        <div class="gap">
                            <p>❍ Découverte des différents corps de métier liés au btp avec les équipes (coffreurs, bancheurs, ferrailleurs, poseurs de prémurs)</p>
                            <p>❍ Rangement de matériels / nettoyage</p>
                            <p>❍ Participation aux OPPBTP (prévention)</p>
                            <p>❍ Tenue du journal de chantier</p> 
                        </div>
                        <a href="https://www.adele.org/residence/2480/maison-blanche-2480/lille-59" target="_blank">[ Pour plus d'informations ]</a>
					</div>
                </div> 

                <div id="skills-list">
				    <h2>Mes compétences</h2>
				    <div id="languages">
					    <h3>Langues</h3>					
                        <div class="pics">&emsp;
                            <img src={France} alt="france" title="Français (courant)" width={'30%'} />&emsp;
                            <img src={Angleterre} alt="angleterre" title="Anglais (niveau B2)" width={'30%'} />&emsp;
                            <div class="space" />
                            <img src={USA} alt="usa" title="Anglais (niveau B2)" width={'30%'} />&emsp;
                            <img src={Espagne} alt="espagne" title="Espagnol (notions)" width={'30%'} /> 
                        </div>
                    </div>
				    <div id="programming-languages">
					    <h3>Langages de programmation</h3>
                        <div class="skills">
                            <span>Programmation :</span>
                            <div class="pics">
                                <img src={CCpp} alt="c-cpp" title="C/C++" width={'17.5%'} />&emsp;
                                <img src={CSharp} alt="csharp" title="C#" width={'20%'} />&emsp;
                                <img src={Python} alt="python" title="Python" width={'17.5%'} />&emsp;
                                <img src={Java} alt="java" title="Java" width={'30%'} />
                            </div>
                        </div>
                        <div class="skills">
                            <span>Web :</span>
                            <div class="pics">
                                <img src={HtmlCss} alt="html-css" title="HTML/CSS" width={'30%'} />&emsp;
                                <img src={Php} alt="php" title="PHP" width={'30%'} />&emsp;
                                <img src={Laravel} alt="laravel" title="Laravel" width={'20%'} />&emsp;
                                <img src={Angular} alt="angular" title="Angular" width={'22.5%'} />&emsp;
                                <img src={JavaScript} alt="javascript" title="JavaScript" width={'17.5%'} />&emsp;
                                <img src={TypeScript} alt="typescript" title="TypeScript" width={'17.5%'} />&emsp;
                                <img src={ReactJS} alt="react-js" title="React.js" width={'25%'} />
                            </div>
                        </div>
                        <div class="skills">
                            <span>Interfaces graphiques :</span>
                            <div class="pics">
                                <img src={XAML} alt="xaml" title="XAML" width={'25%'} />&emsp;
                                <img src={VisualBasic} alt="visual-basic" title="Visual Basic" width={'30%'} />&emsp;
                                <img src={PythonTkinter} alt="python-tkinter" title="Tkinter" width={'20%'} />
                            </div>
                        </div>
                        <div class="skills">
                            <span>Bases de données :</span>
                            <div class="pics">
                                <img src={MySQL} alt="mysql" title="MySQL" width={'30%'} />&emsp;
                                <img src={PostgreSQL} alt="postgresql" title="PostgreSQL" width={'20%'} />&emsp;
                                <img src={NoSQL} alt="nosql" title="NoSQL" width={'20%'} />			
                            </div>
                        </div>
                    </div>
                    <div id="softwares">
                        <h3>Logiciels</h3>
                        <div class="skills">
					        <span>Developpement informatique :</span>
                            <div class="pics">
                                <img src={VisualStudioCode} alt="visual-studio-code" title="Visual Studio Code" width={'17.5%'} />&emsp;
                                <img src={VisualStudio} alt="visual-studio" title="Visual Studio" width={'17.5%'} />&emsp;
                                <img src={IntelliJ} alt="intellij" title="IntelliJ IDEA" width={'17.5%'} />&emsp;
                                <img src={PhpStorm} alt="php-storm" title="PHP Storm" width={'17.5%'} />&emsp;
                                <img src={Git} alt="git" title="Git" width={'20%'} />
                            </div>
                        </div>
                        <div class="skills">
                            <span>Outils d'organisation :</span>
                            <div class="pics">
                                <img src={Trello} alt="trello" title="Trello" width={'40%'} />&emsp;
                                <img src={JiraSoftware} alt="jira-software" title="Jira software" width={'55%'} />
                            </div>
                        </div>
                        <div class="skills">
                            <span>Architecture :</span> 
                            <div class="pics">
                                <img src={AutoCAD} alt="autocad" title="AutoCAD" width={'40%'} />
                                <img src={RevitArchitecture} alt="revit-architecture" title="Revit Architecture" width={'30%'} />
                                <img src={SketchUp} alt="sketchup" title="SketchUp" width={'50%'} />		
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterRelative />
        </div>
    );
};

export default AboutMe;