import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductContext } from './context/ProductContext';
import { CartContext } from './context/CartContext';

function App() {
  const historyData =(JSON.parse(localStorage.getItem('Cart') || ''))
  const [products] = useState(data);
	const [cart, setCart] = useState(historyData);
console.log(historyData)

  const addItem = item => {
		setCart([...cart, item]);
		localStorage.setItem(
      'Cart',
      JSON.stringify([...cart, item])
    );  };
	const removeButton = index => {
		let y = index-1
		cart.splice(y, 1);
		console.log(cart)
		setCart([...cart])
localStorage.setItem(
      'Cart',
      JSON.stringify([...cart])
    );
  };

  return (
    <CartContext.Provider value={{ cart, removeButton }}>
      <ProductContext.Provider value={{ products, addItem }}>
        <div className="App">
          <Navigation cart={cart} />

          {/* Routes */}
          <Route exact path="/" component={Products} />

          <Route path="/cart" component={ShoppingCart} />
        </div>
      </ProductContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
