import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import classes from './header.module.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [showProfile, setShowProfile] = useState(false);
    const dropdownRef = useRef(null);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const fetchCurrentUser = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                setIsLoading(false);
                return;
            }

            try {
                const response = await fetch("https://skillbridge.runasp.net/api/Users/currentUser", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }

                const userData = await response.json();
                setUser(userData);
            } catch (error) {
                console.error("Error fetching user data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCurrentUser();

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowProfile(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const isStudent = user?.role === "Student";
    const isLoggedIn = !!user;

    const handleLogout = () => {
        localStorage.removeItem("token");
        setShowProfile(false);
        window.location.reload();
    };

    return (
        <header className={classes.header}>
            <Link to="/" className={classes.logo}>مشروعي</Link>
            <nav className={`${classes.nav} ${isOpen ? classes.active : ''}`}>
                <Link to="/" onClick={toggleNavbar}>الرئيسية</Link>
                <Link to="/AllProjects" onClick={toggleNavbar}>المشاريع</Link>

                {/* Hide Dashboard link for students */}
                {!isStudent && (
                    <Link to="/Uploded" onClick={toggleNavbar}>لوحة التحكم</Link>
                )}

                <Link to="/dashboard" onClick={toggleNavbar}>أفضل المشاريع</Link>
                <Link to="/ShowBlog" onClick={toggleNavbar}>المقالات</Link>


                {!isLoggedIn ? (
                    <Link to="/login" onClick={toggleNavbar}>تسجيل الدخول</Link>
                ) : (
                    <div className={classes.profileDropdown} ref={dropdownRef}>
                            <div className={classes.userProfile} onClick={() => setShowProfile(!showProfile)}>
                                <img
                                    src={user?.pictureUrl}
                                    className={classes.userImage}
                                    alt="User Profile"
                                    onError={(e) => {
                                        e.target.onerror = null; // Prevent infinite loop if fallback fails
                                        e.target.src = process.env.PUBLIC_URL + "/grad.jpg";
                                    }}
                                />
                                <p className={classes.userName}>{user.userName || "User"}</p>
                            </div>
                        {showProfile && (
                            <div className={classes.dropdown}>
                                <div className={classes.profileHeader}>
                                    <FaUser className={classes.profileIcon} />
                                    <div className={classes.profileInfo}>
                                        <h4>{user.userName || "User"}</h4>
                                        <p>{user.email || "user@example.com"}</p>
                                    </div>
                                </div>
                                <div className={classes.dropdownDivider}></div>
                                
                                <button
                                    className={classes.dropdownItem}
                                    onClick={handleLogout}
                                >
                                    <FaSignOutAlt className={classes.itemIcon} />
                                    <span>تسجيل الخروج</span>
                                </button>
                            </div>
                        )}
                    </div>
                )}

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