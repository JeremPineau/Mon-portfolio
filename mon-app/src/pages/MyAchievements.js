import React from 'react';
import Navigation from '../components/Navigation';
import ScrollButton from '../components/ScrollButton';
import FooterRelative from '../components/FooterRelative';

const MyAchievements = () => {
    return (
        <div className="my-achievements">
            <Navigation />
            <h1>Mes réalisations</h1> 
            
            <div id="section">
                <div id="projet-miellerie-paca">
                    <h2>Projet miellerie PACA</h2>
                    <p><span>Description :</span> Refonte d'un site web vitrine existant pour des apiculteurs.</p> 
					<p><span>Framework :</span> Angular 13.1.2</p>
                    <p><span>Langages de programmation :</span> HTML/CSS, TypeScript 4.5.2</p>
                    <p><span>Base de données :</span> NoSQL (Firebase 9.6.4)</p>
                </div>
                <div id="projet-administration-customer-portal">
                    <h2>Projet portail administration</h2>
                    <p><span>Description :</span> Notre application est un portail de gestion de comptes clients proposant plusieurs services mis à leur disposition et leur permettant de faciliter leur travail. Les clients d'IYA Limited peuvent désormais ajouter et consulter leurs factures depuis le site. Ils ont accès à la gestion de leurs prestations, peuvent apporter une réponse sur la qualité du service proposé. Ils peuvent également créer un devis et y avoir accès, avoir la possibilité d'ajouter un sous-utilisateur et de gérer ses droits. Les fonctionnalités étant :</p>
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
                <div id="projet-ventes-fruits-legumes">
                    <h2>Projet ventes fruits/légumes</h2>
                    <p><span>Description :</span> Création d'un site web débutant de ventes de fruits et de légumes (ajout d'articles et paiement non fonctionnels).</p>
					<p><span>Langages de programmation :</span> HTML/CSS</p>
					<p><span>En collaboration avec :</span> Arthur Palma</p>
                </div>
            </div> 
            <ScrollButton />
            <FooterRelative />
        </div>
    );
};

export default MyAchievements;