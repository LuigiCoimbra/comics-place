import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Store from './pages/Store';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider>
          <Routes>
            <Route path="/" element={<Store />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
