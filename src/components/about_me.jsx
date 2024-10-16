import Grace from "../images/portrait.webp";


function AboutMe (){
    return (
        <div className="me-presentation">
            <div className="picture"> <img src={Grace} alt="Grace LENDET" /></div>
            <div className="presentation">
                <h2 className="title_presentation">A propos de moi</h2>
                <p>
                    Après plusieurs années passées à travailler dans 
                    des emplois administratifs  et sociaux, ma curiosité m'a conduit à m'interesser au développement web. En 2023, j'ai pris la décision d'entreprendre une reconversion professionnelle.
                    <br/>La première étape de ce nouveau défi a été la formation d'Intégrateur Web d'Openclassroom.
                    Je suis à présent, à la recherche de nouvelles oppportunités pour approfondir mes connaissances et renforcer mes acquis.
                </p>
                <button className="download_button"><a href="">Télécharger mon CV</a></button>
            </div>
        </div>
    );
}

export default  AboutMe;