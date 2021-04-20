import React from 'react'

import RemyPic from '../Assets/Remy.jpg'

export default function RemyCard({name, remys, feedRemy, napRemy, kennelRemy}) {

   
    return (
        <div className="remy-card">
            <img alt={name} src={RemyPic} width="100px" />
            <button onClick={() => feedRemy(remys)}>Feed me</button>
            <button onClick={() => napRemy(remys)}>Nap time</button>
            <button onClick={() => kennelRemy(remys)}>Kennel time</button>
        </div>
    );
}
