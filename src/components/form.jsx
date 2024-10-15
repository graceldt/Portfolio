

function Form (){
    return (
        <form className="contact-form">
            <h1 className="title_skills">Contact</h1>
                <input type="text"id="name" placeholder="Nom"/>
                <input type="email" id="email" placeholder="Email"/>
                <input  className="message" type="text" id="message" placeholder="Message"></input>
                <button  className="submit-btn"type="submit">Envoyer </button>
        </form>
    );
}

export default Form;