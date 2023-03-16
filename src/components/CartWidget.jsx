import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/ShoppingCartContext'


const CartWidget = () => {
 const [cart , setCart] = useContext(CartContext);

  return (
    <div className='icon'>
      <Link to={`/cart/`}>
       <span className="material-symbols-outlined ">
            shopping_cart
        </span>
      </Link>
        <span>{cart.length}</span>
    </div>
  )
}

export default CartWidget