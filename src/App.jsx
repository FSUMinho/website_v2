import { useState, useEffect } from 'react';
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

const pageMeta = {
  '/': {
    title: 'FSUMinho - Formula Student Team',
    description: 'FSUMinho Formula Student team from University of Minho.',
    keywords: 'formula student, fsuminho, university minho, motorsport, engineering'
  },
  '/contact': {
    title: 'Contact - FSUMinho',
    description: 'Get in touch with FSUMinho Formula Student team',
    keywords: 'contact, fsuminho, formula student, university minho'
  },
  '/team': {
    title: 'Team - FSUMinho',
    description: 'Meet the talented members of FSUMinho Formula Student team',
    keywords: 'team, members, fsuminho, formula student, engineers'
  },
  '/sponsors': {
    title: 'Sponsors - FSUMinho',
    description: 'Our valued sponsors and partners supporting FSUMinho',
    keywords: 'sponsors, partners, fsuminho, formula student, support'
  },
  '/invest': {
    title: 'Invest - FSUMinho',
    description: 'Investment opportunities with FSUMinho Formula Student team',
    keywords: 'invest, investment, partnership, fsuminho, formula student'
  },
  '/competitions': {
    title: 'Competitions Archive - FSUMinho',
    description: 'FSUMinho competition history and achievements',
    keywords: 'competitions, archive, history, fsuminho, formula student'
  },
  '/recruitment': {
    title: 'Recruitment - FSUMinho',
    description: 'Join FSUMinho Formula Student team - recruitment opportunities',
    keywords: 'recruitment, join, careers, fsuminho, formula student, opportunities'
  }
};

const App = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isLoading, setIsLoading] = useState(true);

  const meta = pageMeta[currentPath] || {
    title: 'FSUMinho - Page Not Found',
    description: 'Page not found on FSUMinho website',
    keywords: 'fsuminho, formula student'
  };

  useEffect(() => {
    document.title = meta.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', meta.description);
    }

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      // Create keywords meta tag if it doesn't exist
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', meta.keywords);

    AOS.init({
      once: true,
      disable: () => window.innerWidth < 800,
      duration: 300,
      easing: 'ease-out-cubic',
    });

    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [location.pathname, meta.title, meta.description, meta.keywords]);

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
          <Route path="/recruitment" element={<Recruitment />} />
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