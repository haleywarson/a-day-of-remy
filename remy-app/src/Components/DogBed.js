import React from 'react'
import RemyCard from './RemyCard'

export default function DogBed(props) {
    return (
        <div>
            <RemyCard dogBed={props.dogBed} />
            <h2>Dog Bed</h2>
        </div>
    )
}
