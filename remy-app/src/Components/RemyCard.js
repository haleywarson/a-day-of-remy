import React from 'react'

import RemyPic from '../Assets/Remy.jpg'

export default function RemyCard(props) {
    

    const feedMe = (event) => {
        console.log("feeding")
    }

    const napMe = (event) => {
        console.log("napping");
    };

    const kennelMe = (event) => {
        console.log("kennel time");
    };

    return (
        <div className="remy-card">
            <img alt={props.name} src={RemyPic} width="100px" />
            <button onClick={feedMe}>Feed me</button>
            <button onClick={napMe}>Nap time</button>
            <button onClick={kennelMe}>Kennel time</button>
        </div>
        );
}
