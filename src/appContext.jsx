import React, {createContext, useState, useEffect} from 'react'
const Context = createContext();

function ContextProvider({children}) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  function toggleFavorite(id) {
    const updatedArr = allPhotos.map(photo => {
      if(photo.id === id){
        return{...photo, isFavorite: !photo.isFavorite}
      }
      return photo
    })
    setAllPhotos(updatedArr)
  }

  function addToCart(item){
    setCartItems(prevItems => [...prevItems, item])
  }

  function removeFromCart(id){
    setCartItems(prevItems => prevItems.filter(item => item.id != id))
  }

  function emptyCart() {
    setCartItems([]);
  }

  useEffect(() => {
    async function photoApi() {
      const response = await fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
      const responseJson = await response.json();
      setAllPhotos(responseJson)
    }
    photoApi();
  },[])

  return(
    <Context.Provider value={{allPhotos, cartItems, toggleFavorite, addToCart, removeFromCart, emptyCart}}>
      {children}
    </Context.Provider>
  )
}

export{ContextProvider, Context}