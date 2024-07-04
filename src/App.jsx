import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './App.css'
import NavBar from './components/navbar';
import Footer from './components/footer'
import No_Page from './pages/no_page/no_page';
import Home from "./pages/homepage/home";
import ContactForm from './pages/contact_form/contact_form';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const updateTitle = (path) => {
      switch (path) {
        case '/':
          document.title = 'FSUMinho - Home';
          break;

        case '/contact':
          document.title = 'Contact'

        default:
          document.title = 'FSUMinho - Page Not Found';
          break;
      }
    };

    updateTitle(location.pathname);
  }, [location]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<No_Page />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;