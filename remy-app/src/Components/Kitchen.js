import React from 'react'
import RemyCard from './RemyCard'

export default function Kitchen(props) {

    const renderRemy = () => {
        return <RemyCard 
                    kitchen={props.kitchen} 
                    remys={props.remys} 
                    feedRemy={props.feedRemy} />;
    }

    return (
        <div className="kitchen">
<<<<<<< HEAD
            { renderCard() }
            <h2>Kitchen</h2>
=======
            <h2>Kitchen</h2>
            { renderRemy() }
>>>>>>> 2220ef6e5caba83bfca45a6230143c11a4bc8852
        </div>
    )
}
