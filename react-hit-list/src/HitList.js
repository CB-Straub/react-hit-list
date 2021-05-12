import React from 'react'


// functional component with destructured props
const HitList = ({name, image}) => {
    return (
        <div className="data">
            <h1 className="name">{name}</h1>
            <img src={image} className="image" alt="maybe a dead person"></img>
            
        </div>
    )
}

export default HitList
