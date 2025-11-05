import './navbar.css';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';

const NavBar = () => {
    const { t } = useTranslation();
    const { currentLanguage, handleChangeLanguage } = useLanguage();
    const flagImage = currentLanguage === 'en' ? '/navbar/en.png' : '/navbar/pt.png';

    const [sponsorsDropdownOpen, setDropdownOpen] = useState(false);
    const [archiveDropdownOpen, setArchiveDropdownOpen] = useState(false);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const sponsorsDropdownRef = useRef(null);
    const archiveDropdownRef = useRef(null);
    const navRef = useRef(null);
    const hamburgerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (hamburgerOpen) {
                const hamburgerButton = hamburgerRef.current;
                const navLinksElement = document.querySelector('.nav-links');
                
                if (hamburgerButton && !hamburgerButton.contains(event.target) && 
                    navLinksElement && !navLinksElement.contains(event.target)) {
                    setHamburgerOpen(false);
                    const hamburger = document.querySelector('.hamburger');
                    const navLinks = document.querySelector('.nav-links');
                    if (hamburger) hamburger.classList.remove('active');
                    if (navLinks) navLinks.classList.remove('active');
                    return;
                }
            }

            if (sponsorsDropdownOpen && sponsorsDropdownRef.current && 
                !sponsorsDropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
            
            if (archiveDropdownOpen && archiveDropdownRef.current && 
                !archiveDropdownRef.current.contains(event.target)) {
                setArchiveDropdownOpen(false);
            }
        };

        if (sponsorsDropdownOpen || archiveDropdownOpen || hamburgerOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [sponsorsDropdownOpen, archiveDropdownOpen, hamburgerOpen]);

    useEffect(() => {
        if (hamburgerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [hamburgerOpen]);

    const toggleDropdown = () => {
        setDropdownOpen(!sponsorsDropdownOpen);
    };

    const toggleArchiveDropdown = () => {
        setArchiveDropdownOpen(!archiveDropdownOpen);
    };

    const closeAllDropdowns = () => {
        setDropdownOpen(false);
        setArchiveDropdownOpen(false);
    };

    const closeHamburgerMenu = () => {
        setHamburgerOpen(false);
        const hamburger = hamburgerRef.current;
        const navLinks = document.querySelector('.nav-links');
        if (hamburger) hamburger.classList.remove('active');
        if (navLinks) navLinks.classList.remove('active');
    };

    const closeAllMenus = () => {
        closeAllDropdowns();
        closeHamburgerMenu();
    };

    const toggleHamburger = () => {
        const newHamburgerState = !hamburgerOpen;
        setHamburgerOpen(newHamburgerState);
        
        setDropdownOpen(false);
        setArchiveDropdownOpen(false);
        
        const hamburger = hamburgerRef.current;
        const navLinks = document.querySelector('.nav-links');
        
        if (hamburger && navLinks) {
            if (newHamburgerState) {
                hamburger.classList.add('active');
                navLinks.classList.add('active');
            } else {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        }
    };

    return (
        <nav style={container} ref={navRef}>
            <Link style={navBranding} to="/">
                <img className="nav-logo" src="/logo_white.png" alt="FSUMinho Logo" />
            </Link>

            <div className='hamburger' ref={hamburgerRef} onClick={toggleHamburger}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

            <ul style={navLinks} className='nav-links'>
                <li style={navLink} title={t('navbar.lang')}>
                    <img src={flagImage} 
                    style={langSelect}
                    onClick={handleChangeLanguage} />
                </li>

                <li className="navLink">
                    <Link to="/team" className="link" onClick={closeHamburgerMenu}>
                        {t('navbar.team')}
                    </Link>
                </li>
   
                <li className="navLink dropdown desktop-link" ref={sponsorsDropdownRef} onClick={toggleDropdown}>
                    <Link to="#" className="link">
                        <div className='sponsors-link'>
                            {t('navbar.sponsors')}
                            <img src='/archive_assets/arrow.png' className={sponsorsDropdownOpen ? 'arrow rotate' : 'arrow'} />
                        </div>
                    </Link>
                    
                    {sponsorsDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><Link to="/sponsors" className="dropdown-link" onClick={closeAllMenus}>{t('navbar.companies')}</Link></li>
                            <li><Link to="/invest" className="dropdown-link" onClick={closeAllMenus}>{t('navbar.invest')}</Link></li>
                        </ul>
                    )}
                </li>

                <li className="navLink mobile-link">
                    <Link to="/sponsors" className="link" onClick={closeHamburgerMenu}>
                        {t('navbar.sponsors')}
                    </Link>
                </li>

                <li className="navLink mobile-link">
                    <Link to="/invest" className="link" onClick={closeHamburgerMenu}>
                        {t('navbar.invest')}
                    </Link> 
                </li>

                <li className="navLink">
                    <Link to="/competitions" className="link" onClick={closeHamburgerMenu}>
                        {t('navbar.competitions')}
                    </Link>
                </li>

                <li className='navLink'>
                    <Link to="/recruitment" className="link" onClick={closeHamburgerMenu}>
                        {t('navbar.recruitment')}
                    </Link>
                </li>

                {/*<li className='navLink'>
                    <Link to="/talent_connect" className="link" onClick={closeHamburgerMenu}>
                        Talent Connect
                    </Link>
                </li>*/}

                <li className='navLink'>
                    <Link to="/contact" className='link' onClick={closeHamburgerMenu}>
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
