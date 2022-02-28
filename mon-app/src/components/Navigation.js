import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to='/' activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to='/about-me' activeClassName="nav-active">
                A propos de moi
            </NavLink>
            <NavLink exact to='/my-achievements' activeClassName="nav-active">
                Mes réalisations
            </NavLink>
            <NavLink exact to='/contact-me' activeClassName="nav-active">
                Me contacter
            </NavLink>
        </div>
    );
};

export default Navigation;