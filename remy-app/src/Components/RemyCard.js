import React from 'react'
import RemyPic from '../Assets/Remy.jpg'
import Kennel from './Kennel'



export default function RemyCard({ kennel }) {

    return (
        <div className="remy-card">
            <img alt={ kennel.name } src={ RemyPic } />
        </div>
    )
}
