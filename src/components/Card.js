import React from 'react';
import 'tachyons';

const Card = ({name, email, id})=>{
    return(
        <div className="tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200X200`} alt="robot"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;