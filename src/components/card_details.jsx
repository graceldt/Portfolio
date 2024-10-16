
function CardDetails({ name, description, children, link }){
    return (
        <div className="details">
            <h3>{name}</h3>
            <p>{description}</p>
            {children}
            <div className="links">
            <a href={link}>Lien Github</a>
            </div>
        </div>

    )
}

export default CardDetails;