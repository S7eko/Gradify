import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // استيراد Link للتوجيه
import classes from './header.module.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={classes.header}>
            <Link to="/" className={classes.logo}>DUCTF CTF</Link> {/* تغيير إلى Link */}
            <nav className={`${classes.nav} ${isOpen ? classes.active : ''}`}>
                <Link to="/" onClick={toggleNavbar}>Home</Link> {/* تغيير إلى Link */}
                <Link to="/challenges" onClick={toggleNavbar}>Challenges</Link> {/* تغيير إلى Link */}
                <Link to="/dashboard" onClick={toggleNavbar}>Dashboard</Link> {/* تغيير إلى Link */}
                <Link to="/leaderboard" onClick={toggleNavbar}>About</Link> {/* تغيير إلى Link */}
                <Link to="/contact" onClick={toggleNavbar}>Contact</Link> {/* تغيير إلى Link */}
                <button className={classes.navCloseBtn} onClick={toggleNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className={classes.navBtn} onClick={toggleNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
