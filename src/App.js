import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import { Counter } from './features/counter/Counter';
import Home from './com/Home';
import Creator from './com/Creator';

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creator" element={<Creator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
