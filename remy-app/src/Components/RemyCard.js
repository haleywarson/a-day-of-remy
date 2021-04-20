import React from 'react'
import RemyPic from '../Assets/Remy.jpg'

export default function RemyCard({name, remys, feedRemy, napRemy, kennelRemy, parkRemy}) {

    return (
        <div className="remy-card">
            <img alt={name} src={RemyPic} />
            <button onClick={() => feedRemy(remys)}>Feed me</button>
            <button onClick={() => napRemy(remys)}>Nap time</button>
            <button onClick={() => kennelRemy(remys)}>Kennel time</button>
            <button onClick={() => parkRemy(remys)}>Play time</button>
        </div>
    );
}
