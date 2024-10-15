import { useState } from 'react';
import CardDetails from "./card_details";
import Tag from "./tag";
import GithubLink from "./github_link";


const Card = ({ title, image, description, tags=[] }) => {
    
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div
        onMouseEnter={() => {
            setShowDetails(true);
        }}
        onMouseLeave={() => {
            setShowDetails(false);
        }}
        >
            <h2 className="card-title">{title}</h2>
            <article  className='card'>
                <img src={image} alt={title} 
                    
                />
                {
                    showDetails 
                    && <CardDetails name='Projet de formation' description={description}>
                        <div className="tagContainer">
                            {
                                tags.map(tag => (
                                    <Tag language={tag}/>
                                ))
                            }
                            
                        </div>
                        
                    </CardDetails>
                }
                
            </article>

        </div>
    );
}

export default  Card;
