import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Properties from './Properties';
import Construction from './Construction';
import Equipment from './Equipment';

export default function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/equipment" element={<Equipment />} />
      </Routes>
    </Router>
  );
}
