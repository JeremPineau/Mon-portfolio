import React from 'react';
import Tunisie from '../assets/my-achievements/projet-miellerie-paca/tunisie.png';
import RoyaumeUni from '../assets/my-achievements/royaume-uni.jpg';
import Vietnam from '../assets/my-achievements/projet-portail-administration/vietnam.png';
import Espagne from '../assets/my-achievements/espagne.jpg';
import France from '../assets/my-achievements/france.png';
import Chine from '../assets/my-achievements/projet-qwirkle/chine.png';
import Portugal from '../assets/my-achievements/projet-ventes-fruits-legumes/portugal.png';

const Projects = () => {
    return (
        <div className="projects">
            <div id="project-achievements">
                <div id="projet-miellerie-paca" data-aos="fade-up">
                    <h3>Projet miellerie PACA&emsp;<img src={Tunisie} alt="tunisie" width={'5%'} /></h3>
                    <p><span>Description :</span> Refonte d'un site web vitrine from scratch pour des apiculteurs.</p> 
                    <p><span>Framework :</span> Angular 13.1.2</p>
                    <p><span>Langages de programmation :</span> HTML/CSS, TypeScript 4.5.2</p>
                    <p><span>Base de données :</span> NoSQL (Firebase 9.6.4)</p>
                </div>
            </div>
            <div id="epsi-achievements">
                <h2 data-aos="fade-up">Bachelor informatique - EPSI</h2>
                <div id="projet-workshop-handicap" data-aos="fade-up">
                    <h3>Projet workshop handicap&emsp;<img src={RoyaumeUni} alt="royaume-uni" width={'5%'} /></h3>
                    <p><span>Description :</span> Il fallait réfléchir à une problèmatique liée au Handicap (exclusion, matériel non adapté, accessibilité, ...) dans le milieu de la formation professionnelle et proposer une solution pouvant répondre à cette problèmatique.</p>
                    <p>Nous avons choisi de créer un site web pour faciliter la vie des personnes atteintes de trisomie 21 et un guide d'utilisation (ou launcher) pour les accompagnants.</p> 
                    <p><span>Framework :</span> Symphony</p>
                    <p><span>Langages de programmation :</span> PHP, Twig, CSS, Shell, JavaScript + Visual Basic, C#</p>
                    <p><span>En collaboration avec :</span> Quentin Vandromme, Thomas Ducoulombier, Vincent Richir, Geoffrey Lepingle</p>
                </div>
            </div>
            <div id="iut-lens-achievements">
                <h2 data-aos="fade-up">DUT informatique - IUT de Lens</h2>
                <div id="projet-administration-customer-portal" data-aos="fade-up">
                    <h3>Projet portail administration (stage)&emsp;<img src={Vietnam} alt="vietnam" width={'5%'} /></h3>
                    <p><span>Description :</span> Notre application est un portail de gestion de comptes clients proposant plusieurs services mis à leur disposition et leur permettant de faciliter leur travail. Les clients d'IYA Limited peuvent désormais ajouter et consulter leurs factures depuis le site. Ils ont accès à la gestion de leurs prestations, peuvent apporter une réponse sur la qualité du service proposé. Ils peuvent également créer un devis et y avoir accès, avoir la possibilité d'ajouter un sous-utilisateur et de gérer ses droits.</p>
                    <p>Les fonctionnalités sont :</p>
                    <div class="gap">
                        <p>❍ Permettre aux utilisateurs de se connecter à leur compte, et, s’ils n’en possèdent pas, faire une demande aux admin du site pour en obtenir un.</p>
                        <p>❍ Permettre aux clients de s’abonner aux différents services du site, de résilier leur abonnement quand ils le souhaitent (selon les conditions du contrat).</p>
                        <p>❍ Fonctionnalité de pings accessible à n'importe qui.</p>
                        <p>❍ Permettre aux admininistrateurs de gérer les droits des clients quand ils le souhaitent, de rétrograder des personnes, …</p>
                        <p>❍ Permettre aux administrateurs et aux utilisateurs de pouvoir ajouter et consulter une facture. Ils peuvent aussi procéder au paiement de celle-ci.</p>
                        <p>❍ Permettre aux utilisateurs de pouvoir créer des sous-utilisateurs.</p>
                        <p>❍ Rédaction d'un document de spécification: c'est-à-dire réaliser des diagrammes d'activité, diagrammes de cas d'utilisation, dictionnaires de données, wireframes pour chaque fonctionnalité.</p>
                    </div>
                    <p><span>Framework :</span> Laravel 4.2.7</p>
                    <p><span>Langages de programmation :</span> PHP 7.4.20, Composer 2.1.3, Node.js 14.17.3 LTS</p>
                    <p><span>Base de données :</span> MySQL Server 8.0.25</p>
                    <p><span>En collaboration avec :</span> Romain Benhamza, Quentin Duperon</p>
                </div> 
                <div id="projet-ludotheque2" data-aos="fade-up">
                    <h3>Projet marathon Agil'IT (semestre 4)&emsp;<img src={Espagne} alt="espagne" width={'5%'} /></h3>
                    <p><span>Description :</span> Création d'une ludothèque en méthode Agile.</p>
                    <p><span>Framework :</span> Angular</p>
                    <p><span>Langages de programmation :</span> TypeScript</p>
                    <p><span>En collaboration avec :</span> Charly Privat, Louis Prevosteau, Quentin Duperon, Niko Sron</p>
                </div>
                <div id="projet-ludotheque1" data-aos="fade-up">
                    <h3>Projet marathon ludothèque (semestre 3)&emsp;<img src={France} alt="france" width={'5%'} /></h3>
                    <p><span>Description :</span> Création d'une ludothèque qui permet aux utilisateurs de naviguer parmi une liste de jeux, d'en ajouter, de voir sa description et de laisser un avis.</p>
                    <p><span>Framework :</span> Laravel</p>
                    <p><span>Langages de programmation :</span> PHP</p>
                    <p><span>En collaboration avec :</span> Grégoire Caron, Cyril Roskoschny, Maxime Lagache, Thibaut Carpentier, Charly Privat</p>
                </div>
            </div>
            <div id="iut-amiens-achievements">
                <h2 data-aos="fade-up">DUT informatique - IUT d'Amiens</h2>
                <div id="projet-qwirkle" data-aos="fade-up">
                    <h3>Projet Qwirkle (semestre 2)&emsp;<img src={Chine} alt="chine" width={'5%'} /></h3>
                    <p><span>Description :</span> Création d'un jeu de société Qwirkle.</p>
                    <p><span>Langages de programmation :</span> Visual Basic, C#</p>
                    <p><span>En collaboration avec :</span> Shiqing Huang, Jin Ren, Mélanie Fouquemberg, Arthur Palma</p>
                </div>
                <div id="projet-ventes-fruits-legumes" data-aos="fade-up">
                    <h3>Projet ventes fruits/légumes (semestre 1)&emsp;<img src={Portugal} alt="portugal" width={'5%'} /></h3>
                    <p><span>Description :</span> Création d'un site web débutant de ventes de fruits et de légumes (ajout d'articles et paiement non fonctionnels).</p>
                    <p><span>Langages de programmation :</span> HTML/CSS</p>
                    <p><span>En collaboration avec :</span> Arthur Palma</p>                       
                </div>
            </div>
        </div>
    );
};

export default Projects;