import { Link } from 'react-router-dom';
import logo_white from '../assets/logo_white.png'

const NavBar = () => {
 return (
    <nav style={ container }>
        <Link to="/">
            <img src={ logo_white } style={ logo } />
        </Link>

        <ul>
            <li>
                <Link></Link>
                <Link></Link>
                <Link></Link>
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
    minHeight: "70px"
};

const logo = {
    height: "40px",
    width: "auto",    
    cursor: "pointer"
};