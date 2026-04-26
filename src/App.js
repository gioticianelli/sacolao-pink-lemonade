import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Contato from './pages/Contato';
import Promocao from './pages/Promocao';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />  {/* ← /produtos com S */}
          <Route path="/contato" element={<Contato />} />
          <Route path="/promocao" element={<Promocao />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;