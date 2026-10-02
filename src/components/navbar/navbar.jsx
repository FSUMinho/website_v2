import './navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';

const NavBar = () => {
    const { t } = useTranslation();
    const { currentLanguage, handleChangeLanguage } = useLanguage();
    const flagImage = currentLanguage === 'en' ? '/navbar/en.png' : '/navbar/pt.png';
    const { pathname } = useLocation();

    const [sponsorsDropdownOpen, setDropdownOpen] = useState(false);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const sponsorsDropdownRef = useRef(null);
    const navRef = useRef(null);

    // Close every menu whenever the route changes
    useEffect(() => {
        setDropdownOpen(false);
        setHamburgerOpen(false);
    }, [pathname]);

    // Close menus on outside click or Escape
    useEffect(() => {
        if (!sponsorsDropdownOpen && !hamburgerOpen) return;

        const handlePointerDown = (event) => {
            if (hamburgerOpen && navRef.current && !navRef.current.contains(event.target)) {
                setHamburgerOpen(false);
            }
            if (sponsorsDropdownOpen && sponsorsDropdownRef.current &&
                !sponsorsDropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setDropdownOpen(false);
                setHamburgerOpen(false);
            }
        };

        document.addEventListener('pointerdown', handlePointerDown);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('pointerdown', handlePointerDown);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [sponsorsDropdownOpen, hamburgerOpen]);

    // Lock page scroll while the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = hamburgerOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [hamburgerOpen]);

    // Drop the mobile menu if the window grows to desktop width
    useEffect(() => {
        const desktop = window.matchMedia('(min-width: 1151px)');
        const handleChange = (event) => {
            if (event.matches) setHamburgerOpen(false);
        };
        desktop.addEventListener('change', handleChange);
        return () => desktop.removeEventListener('change', handleChange);
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(open => !open);
    };

    const toggleHamburger = () => {
        setHamburgerOpen(open => !open);
        setDropdownOpen(false);
    };

    return (
        <nav style={container} ref={navRef}>
            <Link style={navBranding} to="/">
                <img className="nav-logo" src="/logo_white.png" alt="FSUMinho Logo" />
            </Link>

            <div
                className={`hamburger ${hamburgerOpen ? 'active' : ''}`}
                onClick={toggleHamburger}
                role="button"
                aria-label="Menu"
                aria-expanded={hamburgerOpen}
            >
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

            <ul
                style={navLinks}
                className={`nav-links ${hamburgerOpen ? 'active' : ''}`}
                onClick={(e) => {
                    // Also covers tapping the link for the page you're already on
                    if (e.target.closest('a')) setHamburgerOpen(false);
                }}
            >
                <li style={navLink} title={t('navbar.lang')}>
                    <img src={flagImage} 
                    style={langSelect}
                    onClick={handleChangeLanguage}
                    alt={t('navbar.lang')} />
                </li>

                <li className="navLink">
                    <Link to="/team" className="link">
                        {t('navbar.team')}
                    </Link>
                </li>
   
                <li className="navLink dropdown desktop-link" ref={sponsorsDropdownRef}>
                    <span
                        className="link"
                        role="button"
                        tabIndex={0}
                        aria-haspopup="true"
                        aria-expanded={sponsorsDropdownOpen}
                        onClick={toggleDropdown}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                toggleDropdown();
                            }
                        }}
                    >
                        <div className='sponsors-link'>
                            {t('navbar.sponsors')}
                            <img src='/archive_assets/arrow.png' className={sponsorsDropdownOpen ? 'arrow rotate' : 'arrow'} alt="" />
                        </div>
                    </span>

                    <ul className={`dropdown-menu ${sponsorsDropdownOpen ? 'open' : ''}`}>
                        <li><Link to="/sponsors" className="dropdown-link" onClick={() => setDropdownOpen(false)}>{t('navbar.companies')}</Link></li>
                        <li><Link to="/invest" className="dropdown-link" onClick={() => setDropdownOpen(false)}>{t('navbar.invest')}</Link></li>
                    </ul>
                </li>

                <li className="navLink mobile-link">
                    <Link to="/sponsors" className="link">
                        {t('navbar.sponsors')}
                    </Link>
                </li>

                <li className="navLink mobile-link">
                    <Link to="/invest" className="link">
                        {t('navbar.invest')}
                    </Link> 
                </li>

                <li className="navLink">
                    <Link to="/competitions" className="link">
                        {t('navbar.competitions')}
                    </Link>
                </li>

                <li className='navLink'>
                    <Link to="/recruitment" className="link">
                        {t('navbar.recruitment')}
                    </Link>
                </li>
 
                <li className='navLink'>
                    <Link to="/talent_connect" className="link">
                        Talent Connect
                    </Link>
                </li>

                <li className='navLink'>
                    <Link to="/contact" className='link'>
                        {t('footer.contact')}
                    </Link>
                </li>

                <li className='navLink desktop-contact'>
                    <a href="https://www.instagram.com/fsuminho/">
                        <img src="/navbar/insta.png" style={navIcons} alt="Instagram" />
                    </a>
                </li>

                <li className='navLink desktop-contact'>
                    <a href="https://pt.linkedin.com/company/fsuminho">
                        <img src="/navbar/linkedin.png" style={navIcons} alt="LinkedIn" />
                    </a>
                </li>

                <li className="navLink mobile-contacts">
                    <ul className='mobile-contact-list'>
                        <li style={navLink}>
                            <a href="https://www.instagram.com/fsuminho/">
                                <img src="/navbar/insta.png" style={navIcons} alt="Instagram" />
                            </a>
                        </li>

                        <li style={navLink}>
                            <a href="https://pt.linkedin.com/company/fsuminho">
                                <img src="navbar/linkedin.png" style={navIcons} alt="LinkedIn" />
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;

const container = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e52526",
    minHeight: "70px",
    position: "fixed",
    width: "100%",
    zIndex: "9999999",
};

const navBranding = {
    marginLeft: "2%",
    display: "flex",
    alignItems: "center"
};

const navLinks = {
    display: "flex",
    gap: "10px",
    marginRight: "2%",
    alignItems: "center",
    flexWrap: "nowrap"
};

const navLink = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    position: "relative"
};

const navIcons = {
    height: "auto",
    width: "40px",
    marginTop: "5px"
};

const langSelect = {
    height: "auto",
    width: "30px",
    padding: "1px",
    borderRadius: "50%",
    backgroundColor: "white"
};
