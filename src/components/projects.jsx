import Card from "./card";
import Booki from "../images/booki.webp"
import Nina from "../images/nina_carducci.webp"
import Ohmyfood from "../images/ohmyfood.webp"
import Sophie from "../images/sophie_bluel.webp"
import Kasa from "../images/kasa.webp"
import ArgentBank from "../images/argentBank.webp"


function Projects (){
    return (
        <div>
            <h2 className="title_skills">MES PROJETS</h2>
            <div className='project'>
            <Card title="Booki" image={Booki} tags={['HTML', 'CSS']} description="Création de la page d'accueil d'une agence de voyage" link="https://github.com/graceldt/booki.git"/>
            <Card title="OhmyFood" image={Ohmyfood} tags={['HTML', 'SCSS']}  description="Amélioration de l'interface d'un site mobile avec des animations" link="https://github.com/graceldt/Ohmyfood.git"/>
            <Card title="Sophie Bluel" image={Sophie} tags={['HTML','CSS', 'JAVASCRIPT']} description="Création d'une page web dynamique avec JavaScript" link="https://github.com/graceldt/Portfolio-architecte-sophie-bluel.git"/>
            <Card title="Kasa" image={Kasa} tags={['HTML','CSS', 'REACT']} description="Création d'une application web de location immobilière avec React" link="https://github.com/graceldt/Kasa.git"/>
            <Card title="Nina Carducci" image={Nina} tags={['LIGTHOUSE','WAVE']} description="Optimisation du référencement d'un site de photographe" link="https://github.com/graceldt/Nina-Carducci-P8.git"/>
            <Card title="Argent Bank" image={ArgentBank} tags={['HTML','CSS', 'REACT']} description="Implémentation du front-end d'une application bancaire avec React" link="https://github.com/graceldt/ArgentBank-website.git"/>

            </div>
        </div>
    );
}

export default  Projects;