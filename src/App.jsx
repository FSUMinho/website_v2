import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import No_Page from './pages/no_page/no_page';
import Home from "./pages/homepage/home";
import ContactForm from './pages/contact_form/contact_form';
import Team from './pages/team/team';
import Sponsors from './pages/sponsors/sponsors';
import Archive from './pages/team_archive/archive';

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
          break;

        case '/team':
          document.title = 'Team'
          break;

        case '/sponsors':
          document.title = 'Sponsosrs'
          break;

        case '/archive':
          document.title = 'Archive'
          break;

        default:
          document.title = 'FSUMinho - Page Not Found';
          break;
      }
    };

    updateTitle(location.pathname);

    AOS.init({
      once: true,
      disable: "phone",
      duration: 300,
      easing: "ease-out-cubic",
    });
  }, [location]);

  return (
    
    <div style={appContainerStyle}>
      <NavBar />
      <div style={contentStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="*" element={<No_Page />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

const appContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const contentStyle = {
  flex: '1',
  paddingTop: "70px",
  paddingBottom: "70px"
};

export default App;