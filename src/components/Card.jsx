import React from 'react';

let Card = (props) => {
    return (
        <div className="card border border-dark m-2">
                <div className="card-body bg-success">
                    <h5 className="card-title text-center">{props.film.title}</h5>
                    <p className="card-text">{props.film.description}</p>
                </div>
            </div>
    )
}



export default Card;