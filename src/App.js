import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BlogDetail from './components/BlogDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white m-0 p-0 overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
