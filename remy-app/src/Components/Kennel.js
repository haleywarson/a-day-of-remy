import React from 'react'
import RemyCard from './RemyCard'

export default function Kennel({ kennel }) {

    const renderRemy = () => {
        return kennel.map(remy => {
            return <RemyCard 
            kennel={kennel}
        />
        })
    }

    return (
        <div>
            { renderRemy() }
            <h2>Kennel</h2>
        </div>
    )
}
