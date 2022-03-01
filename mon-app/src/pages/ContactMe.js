import React from 'react';
import Navigation from '../components/Navigation';

const ContactMe = () => {
    return (
        <div className="contact-me">
            <Navigation />
            <h1>Me contacter</h1> 

            <div id="section">
                <div id="contact">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20339.256643371868!2d2.9975263785286064!3d50.41488668609547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2ccf4870ba1cd%3A0x40af13e8163f5a0!2sCourcelles-l%C3%A8s-Lens!5e0!3m2!1sfr!2sfr!4v1604072137712!5m2!1sfr!2sfr" width={'100%'} />
                    <p><span>Lieu :</span> Courcelles-lès-lens</p>
                    <p><span>Tél :</span> 06 47 98 62 73</p>
                    <p><span>Mail :</span><a href="mailto:pi.jeremie@outlook.fr" target="_blank"> pi.jeremie@outlook.fr</a></p>
                    <p><span>LinkedIn :</span><a href="https://fr.linkedin.com/in/jeremiepineau13" target="_blank"> jeremiepineau13</a></p>
                    <p><span>GitHub :</span><a href="https://github.com/JeremPineau" target="_blank"> JeremPineau</a></p>
                    <p><span>GitLab :</span><a href="https://gitlab.com/JeremPineau" target="_blank"> JeremPineau</a></p>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;