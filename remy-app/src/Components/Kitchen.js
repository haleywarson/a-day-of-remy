import React from 'react'
import RemyCard from './RemyCard'

export default function Kitchen(props) {

    const renderCard = () => {
        return <RemyCard kitchen={ props.kitchen } />
    }

    return (
        <div className="kitchen">
            { renderCard() }
        </div>
    )
}
