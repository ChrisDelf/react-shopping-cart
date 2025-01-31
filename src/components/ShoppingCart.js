import React, { useContext } from 'react';

// Components
import Item from './ShoppingCartItem';
import { CartContext } from '../context/CartContext';

const ShoppingCart = () => {
	const {cart, removeButton} = useContext(CartContext);
	console.log("Shopping", cart)
  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="shopping-cart">
      {cart.map((item, index) => (
        <Item key={item.id} {...item} index = {index} remove= {removeButton}/>
      ))}

      <div className="shopping-cart__checkout">
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
