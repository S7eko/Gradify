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
            <Link to="/" className={classes.logo}> مشروعي</Link> {/* تغيير إلى Link */}
            <nav className={`${classes.nav} ${isOpen ? classes.active : ''}`}>
                <Link to="/" onClick={toggleNavbar}>الرئيسية</Link> {/* تغيير إلى Link */}
                <Link to="/AllProjects" onClick={toggleNavbar}>المشاريع</Link> {/* تغيير إلى Link */}
                <Link to="/Uploded" onClick={toggleNavbar}>لوحة التحكم</Link>
                <Link to="/dashboard" onClick={toggleNavbar}>أفضل المشاريع</Link> {/* تغيير إلى Link */}
                <Link to="/login" onClick={toggleNavbar}>تسجيل الدخول</Link> {/* تغيير إلى Link */}
                <Link to="/leaderboard" onClick={toggleNavbar}>تواصل معنا</Link> {/* تغيير إلى Link */}
                {/* <Link to="/contact" onClick={toggleNavbar}>Contact</Link>  */}
                <button className={classes.navCloseBtn} onClick={toggleNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className={classes.navBtn} onClick={toggleNavbar}>
                <FaBars />
            </button>
        </header>
    );
    // Esraa Eid
}

export default Navbar;
