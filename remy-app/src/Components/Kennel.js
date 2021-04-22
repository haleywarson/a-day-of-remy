import React from 'react'

import "../App.css";
import "../index.css";

import RemyCard from './RemyCard'

export default function Kennel(props) {

    const renderRemy = () =>  {
        let remyInKennel = props.kennel.length !== 0;
        if(remyInKennel) {
            return <RemyCard
                    kennel={props.kennel}
                    remys={props.remys}
                    kennelRemy={props.kennelRemy} 
                    napRemy={props.napRemy} 
                    parkRemy={props.parkRemy}
                    feedRemy={props.feedRemy}
                />;
        }
    }
    return (
        <div className="kennel">
            <img
            alt="Kennel"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9AseDiRKogw7tyEINF8-38yNySMzcWHmcBAds0YdNuHDRWKUC7u4NCuTvWRe8yrARDi0&usqp=CAU"
            />
            {renderRemy()}
        </div>
    );
}
