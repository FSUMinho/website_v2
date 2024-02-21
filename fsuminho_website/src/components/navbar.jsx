import { Link } from 'react-router-dom';
import logo_red from '../assets/logo_red.png'

const NavBar = () => {
 return (
    <nav style={ container }>
        <img src={ logo_red } style={ logo } />
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
        </ul>
    </nav>
 );
};

export default NavBar;

const container = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
};

const logo = {
    height: "40px",
    width: "auto",    
    cursor: "pointer"
};