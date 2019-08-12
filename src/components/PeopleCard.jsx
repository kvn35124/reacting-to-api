import React from 'react';

let PeopleCard = (props) => {
    return (
        <>
        
            <div className="card border border-dark m-2">
                <div className="card-body bg-success">
                    <h5 className="card-title text-center">{props.person.director}</h5>
                    <h2 className="card-text">{props.person.gender}</h2>
                    <h2>{props.person.age}</h2>
                    <a href={props.person.url}>{props.person.url}</a>
                    {console.log(props)}  //
                </div>
            </div>
        </>
    )
}



export default PeopleCard;