// src/Register.js
import React, { useState } from 'react';
import classes from './Register.module.css'; // Ensure you have this file created

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!username || !email || !password || !confirmPassword) {
            setError('Please fill in all fields');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Registration logic (e.g., API call)
        console.log('Registering with:', { username, email, password });

        // Reset fields on successful registration (just for example)
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');
    };

    return (
        <div className={classes.containers}>
            <div className={classes.registerContainer}>
                <h2 className={classes.title}>Register</h2>
                {error && <p className={classes.error}>{error}</p>}
                <form onSubmit={handleSubmit} className={classes.form}>
                    <div className={classes.inputGroup}>
                        <label htmlFor="username" className={classes.label}>Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className={classes.input}
                        />
                    </div>
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
                    <div className={classes.inputGroup}>
                        <label htmlFor="confirmPassword" className={classes.label}>Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className={classes.input}
                        />
                    </div>
                    <button type="submit" className={classes.button}>Register</button>
                </form>
                <p className={classes.loginText}>
                    Already have an account? <a href="/logIn" className={classes.loginLink}>Login</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
