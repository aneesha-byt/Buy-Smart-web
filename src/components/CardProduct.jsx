import React from 'react'

function CardProduct(props) {
  return (
    <div>
        {/* <img src={props.item.image} /> */}
        <img src={props.item.image} alt={item.title} />
            <h4>{props.item.title}</h4>
    </div>
  )
}

export default CardProduct