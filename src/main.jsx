import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/404.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />;
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />;
          <Route path="/about" element={<About />} />;
          <Route path="/contact" element={<Contact />} />;
          <Route path="*" element={<NotFound />} />;
        </Route>;
      </Routes>;
    </BrowserRouter>;
  </StrictMode>
);