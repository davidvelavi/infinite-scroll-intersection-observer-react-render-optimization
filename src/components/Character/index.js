import React from 'react'

const Character = ({image, name}) => {
  return (
    <div>
      <img src={image} alt={name}/>
      <p>{name}</p>
    </div>
  )
}

export default React.memo(Character);
