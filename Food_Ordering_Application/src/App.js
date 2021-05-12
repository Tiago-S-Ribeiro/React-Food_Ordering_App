import React, { useState } from 'react';
import CartProvider from './store/CartProvider';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);
  }

  const hideCartHandler = () => {
    setIsCartShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
        <main>
          <Meals />
        </main>
    </CartProvider>
  );
}

export default App;
