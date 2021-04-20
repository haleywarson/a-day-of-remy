import React from 'react'
import RemyCard from './RemyCard'

export default function DogBed(props) {

    const renderRemy = () => {
            return <RemyCard 
                        dogBed={props.dogBed} 
                        remys={props.remys} 
                        napRemy={props.napRemy} />;
        };
    
    return (
<<<<<<< HEAD
        <div>
            <RemyCard dogBed={props.dogBed} />
            <h2>Dog Bed</h2>
=======
        <div className="dog-bed">
            <h2>Dog Bed</h2>
            { renderRemy() }
>>>>>>> 2220ef6e5caba83bfca45a6230143c11a4bc8852
        </div>
    )
}
