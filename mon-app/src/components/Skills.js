import React from 'react';
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

const Skills = () => {
    return (
        <div className="skills">
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
    );
};

export default Skills;