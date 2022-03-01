import React from 'react';
import { NavLink } from 'react-router-dom';
import Cat from '../assets/cat.png';

const Navigation = () => {
    return (
        <div className="navigation">
            <div id="nav">
                <img id="cat" src={Cat} alt="cat" />
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