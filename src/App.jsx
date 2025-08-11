import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; 
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

  const getStructuredData = (path) => {
    const baseUrl = "https://www.fsuminho.com";
    const hashUrl = path === '/' ? baseUrl : `${baseUrl}/#${path}`;
    
    const baseData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
          "name": "FSUMinho",
          "url": baseUrl,
          "sameAs": [
            "https://www.instagram.com/fsuminho",
            "https://www.linkedin.com/company/fsuminho"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "General Inquiry",
            "url": `${baseUrl}/#/contact`
          }
        },
        {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          "url": baseUrl,
          "name": "FSUMinho",
          "publisher": {
            "@id": `${baseUrl}/#organization`
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/#/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        }
      ]
    };

    switch (path) {
      case '/':
        baseData["@graph"].push({
          "@type": "WebPage",
          "@id": `${baseUrl}/#homepage`,
          "url": baseUrl,
          "name": "FSUMinho - Formula Student Team",
          "description": "FSUMinho Formula Student team from University of Minho",
          "isPartOf": {
            "@id": `${baseUrl}/#website`
          },
          "about": {
            "@id": `${baseUrl}/#organization`
          },
          "mainEntity": {
            "@id": `${baseUrl}/#organization`
          }
        });
        break;
      
      case '/team':
        baseData["@graph"].push({
          "@type": "WebPage",
          "@id": `${baseUrl}/#/team#webpage`,
          "url": `${baseUrl}/#/team`,
          "name": "Team - FSUMinho",
          "description": "Meet the FSUMinho Formula Student team members",
          "isPartOf": {
            "@id": `${baseUrl}/#website`
          }
        });
        break;
      
      case '/competitions':
        baseData["@graph"].push({
          "@type": "WebPage",
          "@id": `${baseUrl}/#/competitions#webpage`,
          "url": `${baseUrl}/#/competitions`,
          "name": "Competitions Archive - FSUMinho",
          "description": "FSUMinho competition history and achievements",
          "isPartOf": {
            "@id": `${baseUrl}/#website`
          }
        });
        break;
      
      case '/contact':
        baseData["@graph"].push({
          "@type": "ContactPage",
          "@id": `${baseUrl}/#/contact#webpage`,
          "url": `${baseUrl}/#/contact`,
          "name": "Contact - FSUMinho",
          "description": "Get in touch with FSUMinho Formula Student team",
          "isPartOf": {
            "@id": `${baseUrl}/#website`
          }
        });
        break;
    }

    return baseData;
  };

  const getPageMeta = (path) => {
    switch (path) {
      case '/':
        return {
          title: 'FSUMinho - Formula Student Team',
          description: 'FSUMinho Formula Student team from University of Minho.',
          keywords: 'formula student, fsuminho, university minho, motorsport, engineering'
        };
      case '/contact':
        return {
          title: 'Contact - FSUMinho',
          description: 'Get in touch with FSUMinho Formula Student team',
          keywords: 'contact, fsuminho, formula student, university minho'
        };
      case '/team':
        return {
          title: 'Team - FSUMinho',
          description: 'Meet the talented members of FSUMinho Formula Student team',
          keywords: 'team, members, fsuminho, formula student, engineers'
        };
      case '/sponsors':
        return {
          title: 'Sponsors - FSUMinho',
          description: 'Our valued sponsors and partners supporting FSUMinho',
          keywords: 'sponsors, partners, fsuminho, formula student, support'
        };
      case '/invest':
        return {
          title: 'Invest - FSUMinho',
          description: 'Investment opportunities with FSUMinho Formula Student team',
          keywords: 'invest, investment, partnership, fsuminho, formula student'
        };
      case '/competitions':
        return {
          title: 'Competitions Archive - FSUMinho',
          description: 'FSUMinho competition history and achievements',
          keywords: 'competitions, archive, history, fsuminho, formula student'
        };
      case '/recruitment':
        return {
          title: 'Recruitment - FSUMinho',
          description: 'Join FSUMinho Formula Student team - recruitment opportunities',
          keywords: 'recruitment, join, careers, fsuminho, formula student, opportunities'
        };
      default:
        return {
          title: 'FSUMinho - Page Not Found',
          description: 'Page not found on FSUMinho website',
          keywords: 'fsuminho, formula student'
        };
    }
  };

  useEffect(() => {
    const meta = getPageMeta(location.pathname);
    document.title = meta.title;

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

  const currentMeta = getPageMeta(location.pathname);
  const structuredData = getStructuredData(location.pathname);
  
  const baseUrl = "https://www.fsuminho.com";
  const canonicalUrl = location.pathname === '/' ? baseUrl : `${baseUrl}/#${location.pathname}`;
  const ogUrl = location.pathname === '/' ? baseUrl : `${baseUrl}/#${location.pathname}`;

  return (
    <div style={appContainerStyle}>
      <Helmet>
        <title>{currentMeta.title}</title>
        <meta name="description" content={currentMeta.description} />
        <meta name="keywords" content={currentMeta.keywords} />
        
        <meta property="og:title" content={currentMeta.title} />
        <meta property="og:description" content={currentMeta.description} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
        
        <link rel="canonical" href={canonicalUrl} />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

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