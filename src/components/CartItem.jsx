import React, {useContext, useState} from 'react'
import {Context} from '../appContext'
import PropTypes from 'prop-types'
import useHover from '../hooks/useHover'

export default function CartItem({item}) {
  const [hover, ref] = useHover()
  const {removeFromCart} = useContext(Context)
  return(
    <div className="cart-item">
      <i 
        ref={ref}
        className={`ri-delete-bin-${hover ? 'fill' : 'line'}`} 
        onClick={() => removeFromCart(item.id)}>
      </i>
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
}