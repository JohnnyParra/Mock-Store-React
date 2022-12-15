import React, {useState, useContext} from 'react'
import {Context} from '../appContext'
import PropTypes from 'prop-types'
import useHover from '../hooks/useHover'


export default function Image({className, img}) {
  const [hover, ref] = useHover()
  const {toggleFavorite, removeFromCart, addToCart, cartItems} = useContext(Context);

  const heartIcon = (hover || img.isFavorite) && 
    <i 
    className={`ri-heart-${img.isFavorite ? 'fill': 'line'} favorite`}
    onClick={() => toggleFavorite(img.id)}>
    </i>

  function cartIcon() {
    const inCart = cartItems.some(item => item.id === img.id);
    if(inCart){
      return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
    } else if(hover) {
      return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
    }
  }
 
  return(
    <div 
      className={`${className} image-container`}
      ref={ref}
    >
      <img className="image-grid" src={img.url} />
      {heartIcon}
      {cartIcon()}
    </div>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
}