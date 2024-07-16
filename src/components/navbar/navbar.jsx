import './navbar.css';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from 'react-i18next';
import logo_white from '../../assets/logo_white.png';
import insta_logo from '../../assets/navbar/insta.png';
import linkedin_logo from '../../assets/navbar/linkedin.png';
import email_logo from '../../assets/navbar/email.png';
import enFlag from '../../assets/navbar/en.png';
import ptFlag from '../../assets/navbar/pt.png';
import { useState } from 'react';
import arrow from '../../assets/archive_assets/arrow.png';

const NavBar = () => {
    const { t } = useTranslation();
    const { currentLanguage, handleChangeLanguage } = useLanguage();
    const flagImage = currentLanguage === 'en' ? enFlag : ptFlag;

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav style={container}>
            <Link style={navBranding} to="/">
                <img src={logo_white} style={logo} alt="FSUMinho Logo" />
            </Link>

            <ul style={navLinks}>
                <li style={navLink}>
                    <img src={flagImage} 
                    style={langSelect}
                    onClick={handleChangeLanguage} />
                </li>

                <li className="navLink">
                    <Link to="/team" className="link">
                        {t('navbar.team')}
                    </Link>
                </li>

                <li className="navLink dropdown" onClick={toggleDropdown}>
                    <Link to="#" className="link">
                        <div className='sponsors-link'>
                            {t('navbar.sponsors')}
                            <img src={arrow} className={dropdownOpen ? 'arrow rotate' : 'arrow'} />
                        </div>
                    </Link>
                    
                    {dropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><Link to="/sponsors" className="dropdown-link">{t('navbar.companies')}</Link></li>
                            <li><Link to="/invest" className="dropdown-link">{t('navbar.invest')}</Link></li>
                        </ul>
                    )}
                </li>

                <li className="navLink">
                    <Link to="/archive" className="link">
                        {t('navbar.archive')}
                    </Link>
                </li>

                <li style={navLink}>
                    <a href="https://www.instagram.com/fsuminho/">
                        <img src={insta_logo} style={navIcons} alt="Instagram" />
                    </a>
                </li>

                <li style={navLink}>
                    <a href="https://pt.linkedin.com/company/fsuminho">
                        <img src={linkedin_logo} style={navIcons} alt="LinkedIn" />
                    </a>
                </li>

                <li style={navLink}>
                    <Link to="/contact">
                        <button>
                            <img src={email_logo} style={navIcons} alt="Email" />
                        </button>
                    </Link>
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
    marginLeft: "1%"
}

const logo = {
    height: "40px",
    width: "auto",
    cursor: "pointer"
};

const navLinks = {
    display: "flex",
    gap: "10px",
    marginRight: "1%",
    alignItems: "center"
};

const navLink = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    position: "relative"
}

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
}
