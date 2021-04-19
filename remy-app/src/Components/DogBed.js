import React from 'react'
import RemyCard from './RemyCard'

export default function DogBed(props) {
    return (
        <div>
            <RemyCard dogBed={props.dogBed} />
        </div>
    )
}
