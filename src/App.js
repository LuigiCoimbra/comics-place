import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Provider from './context/Provider';
import ShoppingCart from './pages/ShoppingCart';
import Store from './pages/Store';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider>
          <Routes>
            <Route path="/" element={<Store />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/detalhes/:id" />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
