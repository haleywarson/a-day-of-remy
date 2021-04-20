import React from 'react'
// import RemyPic from '../Assets/Remy.jpg'

export default function RemyCard(props) {

    const handleClick = (e) => {
        console.log('clicked')
        // e.target.src="https://flic.kr/ps/3WnfoE"
    }

    return (
        <div className="remy-card" onClick={ handleClick }>
            {/* <img alt={ props.name } width="50px"/> */}
        </div>
    )
}
