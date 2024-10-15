

function CardDetails({ name, description, children }){
    return (
        <div className="details">
            <h3>{name}</h3>
            <p>{description}</p>
            {children}
        </div>

    )
}

export default CardDetails;