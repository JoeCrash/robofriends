import React from 'react';
import 'tachyons';
const Card = ({name, id, email}) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id || Math.random() * 15}?150x150`}  alt="" />
            <div>
                <h2>{name || "N/A"}</h2>
                <p>{email || "N/A"}</p>
            </div>
        </div>
    );
}

export default Card;