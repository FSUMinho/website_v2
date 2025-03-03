import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import No_Page from './pages/no_page/no_page';
import Home from "./pages/homepage/home";
import ContactForm from './pages/contact_form/contact_form';
import Team from './pages/team/team';
import Sponsors from './pages/sponsors/sponsors';
import Competitions from './pages/team_archive/competitons/competitions';
import Invest from './pages/invest/invest';
import Recruitment from './pages/recruitment/recruitment';
import Loading from './components/loading/loading';

const App = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateTitle = (path) => {
      switch (path) {
        case '/':
          document.title = 'FSUMinho';
          break;
        case '/contact':
          document.title = 'Contact';
          break;
        case '/team':
          document.title = 'Team';
          break;
        case '/sponsors':
          document.title = 'Sponsors';
          break;
        case '/invest':
          document.title = 'Invest';
          break;
        case '/competitions':
          document.title = 'Archive';
          break;
        case '/cars':
          document.title = 'Cars';
          break;
        case '/recruitment':
          document.title = 'Recruitment';
          break;
        default:
          document.title = 'FSUMinho - Page Not Found';
          break;
      }
    };

    updateTitle(location.pathname);

    AOS.init({
      once: true,
      disable: function () {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
      },
      duration: 300,
      easing: 'ease-out-cubic',
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
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
          <Route path="/invest" element={<Invest />} />
          <Route path="/competitions" element={<Competitions />} />
          {/*<Route path="/recruitment" element={<Recruitment />} />*/}
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
  paddingTop: '70px',
  paddingBottom: '70px',
};

export default App;