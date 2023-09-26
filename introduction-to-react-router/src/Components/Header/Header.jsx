
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>

            <nav>
                <span>My Website</span>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/posts">Posts</Link>
                <NavLink to="/photos">Photos</NavLink>
            </nav>
        </div>
    );
};

export default Header;