import React from 'react';
import { NavLink } from 'react-router-dom';
import Cat from '../assets/navigation/cat.png';
import Linkedin from '../assets/navigation/linkedin.png';
import Github from '../assets/navigation/github.png';
import Gitlab from '../assets/navigation/gitlab.png';

const Navigation = () => {
    return (
        <div className="navigation">
            <div id="nav">
                <img id="cat" src={Cat} alt="cat" />
                <a href="https://fr.linkedin.com/in/jeremiepineau13" target="_blank"><img id="linkedin" src={Linkedin} alt="linkedin" width={'30em'} /></a>
                <a href="https://github.com/JeremPineau" target="_blank"><img id="github" src={Github} alt="github" width={'40em'} /></a>
                <a href="https://gitlab.com/JeremPineau" target="_blank"><img id="gitlab" src={Gitlab} alt="gitlab" width={'25em'} /></a>
                <NavLink id="contact-me-nav" exact to='/contact-me' activeClassName="nav-active">
                    <li>Me contacter</li>
                </NavLink>
                <NavLink id="my-achievements-nav" exact to='/my-achievements' activeClassName="nav-active">
                    <li>Mes réalisations</li>
                </NavLink>
                <NavLink id="about-me-nav" exact to='/about-me' activeClassName="nav-active">
                    <li>A propos de moi</li>
                </NavLink>
                <NavLink id="homepage-nav" exact to='/' activeClassName="nav-active">
                    <li>Accueil</li>
                </NavLink>
            </div>
        </div>
    );
};

export default Navigation;