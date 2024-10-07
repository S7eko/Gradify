// src/Login.js
import React, { useState } from 'react';
import classes from './logIn.module.css'; // Ensure you have this file created

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        // Authentication logic (e.g., API call)
        console.log('Logging in with:', { email, password });

        // Reset fields on successful login (just for example)
        setEmail('');
        setPassword('');
        setError('');
    };

    return (
        <div className={classes.containers}>
        <div className={classes.loginContainer}>
            <h2 className={classes.title}>Login</h2>
            {error && <p className={classes.error}>{error}</p>}
            <form onSubmit={handleSubmit} className={classes.form}>
                <div className={classes.inputGroup}>
                    <label htmlFor="email" className={classes.label}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={classes.input}
                    />
                </div>
                <div className={classes.inputGroup}>
                    <label htmlFor="password" className={classes.label}>Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className={classes.input}
                    />
                </div>
                <button type="submit" className={classes.button}>Login</button>
            </form>

            <p className={classes.registerText}>Don't have an account? <a href="/contact" className={classes.registerLink}>Register</a></p>
        </div>
        </div>
    );
};

export default Login;
