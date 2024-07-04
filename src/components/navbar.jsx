import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import logo_white from '../assets/logo_white.png';
import insta_logo from '../assets/navbar/insta.png';
import linkedin_logo from '../assets/navbar/linkedin.png';
import enFlag from '../assets/navbar/en.png';
import ptFlag from '../assets/navbar/pt.png';

const NavBar = () => {
    const { currentLanguage, handleChangeLanguage } = useLanguage();
    const flagImage = currentLanguage === 'en' ? enFlag : ptFlag;

    return (
        <nav style={container}>
            <Link to="/">
                <img src={logo_white} style={logo} alt="FSUMinho Logo" />
            </Link>

            <ul style={navLinks}>
                <li>
                    <img src={flagImage} 
                    style={langSelect}
                    onClick={handleChangeLanguage} />
                </li>

                <li>
                    <a href="https://www.instagram.com/fsuminho/">
                        <img src={insta_logo} style={navIcons} alt="Instagram" />
                    </a>
                </li>

                <li>
                    <a href="https://pt.linkedin.com/company/fsuminho">
                        <img src={linkedin_logo} style={navIcons} alt="LinkedIn" />
                    </a>
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
    padding: "0 20px"
};

const logo = {
    height: "40px",
    width: "auto",
    cursor: "pointer"
};

const navLinks = {
    display: "flex",
    gap: "10px",
    margin: 0,
    padding: 0,
    alignItems: "center"
};

const navIcons = {
    height: "auto",
    width: "40px"
};

const langSelect = {
    height: "auto",
    width: "30px",
    padding: "1px",
    borderRadius: "50%",
    backgroundColor: "white",
    cursor: "pointer"
}