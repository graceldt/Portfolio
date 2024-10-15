import Card from "./card";
import Booki from "../images/booki.webp"
import Nina from "../images/nina_carducci.webp"
import Ohmyfood from "../images/ohmyfood.webp"
import Sophie from "../images/sophie_bluel.webp"


function Projects (){
    return (
        <div>
            <h2 className="title_skills">MES PROJETS</h2>
            <div className='project'>
            <Card title="Booki" image={Booki} tags={['HTML', 'CSS']} description="Création de la page d'accueil d'une agence de voyage"/>
            <Card title="OhmyFood" image={Ohmyfood} tags={['HTML', 'SCSS']}  description="Amélioration de l'interface d'un site mobile avec des animations"/>
            <Card title="Sophie Bluel" image={Sophie} tags={['HTML','CSS', 'JAVASCRIPT']} description="Création d'une page web dynamique avec JavaScript"/>
            <Card title="Kasa" image={Booki} tags={['HTML','CSS', 'REACT']} description="Création d'une application web de location immobilière avec React"/>
            <Card title="Nina Carducci" image={Nina} tags={['HTML','CSS', 'JAVASCRIPT']} description="Optimisation du référencement d'un site de photographe"/>
            <Card title="Argent Bank" image={Booki} tags={['HTML','CSS', 'REACT']} description="Implémentation du front-end d'une application bancaire avec React"/>

            </div>
        </div>
    );
}

export default  Projects;