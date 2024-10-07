// src/components/Footer.js
import React from 'react';
import classes from './footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.links}>
                    <a href="/about" className={classes.link}>About Us</a>
                    <a href="/privacy" className={classes.link}>Privacy Policy</a>
                    <a href="/contact" className={classes.link}>Contact Us</a>
                </div>
                <div className={classes.copyright}>
                    <p>&copy; 2024 CTF Platform. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
