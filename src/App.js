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

  const [products] = useState(data);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('Cart')) || []);
   const addItem = item => {
    setCart([...cart, item]);
    localStorage.setItem('Cart', JSON.stringify([...cart, item]));
  };
  const removeButton = index => {
    let newCart = [...cart];
    newCart.splice(index, 1);

    setCart(newCart);
    localStorage.setItem('Cart', JSON.stringify(newCart));
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
