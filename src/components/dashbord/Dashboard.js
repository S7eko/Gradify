import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './dashboard.module.css';

const Dashboard = () => {
    const location = useLocation();
    const { title = "Challenge Title", result = "Challenge Result" } = location.state || {}; // Default values
    const [completedChallenges, setCompletedChallenges] = useState(() => {
        // Get the completed challenges from localStorage on initial render
        const storedChallenges = localStorage.getItem('completedChallenges');
        return storedChallenges ? JSON.parse(storedChallenges) : [];
    });

    useEffect(() => {
        if (title && result) {
            // Check if the challenge already exists
            const challengeExists = completedChallenges.some(
                challenge => challenge.title === title && challenge.result === result
            );

            // Only add the new challenge if it doesn't already exist
            if (!challengeExists) {
                const newChallenges = [...completedChallenges, { title, result }];
                setCompletedChallenges(newChallenges);
                // Save the updated challenges to localStorage
                localStorage.setItem('completedChallenges', JSON.stringify(newChallenges));
            }
        }
    }, [title, result, completedChallenges]); // Add completedChallenges to dependencies

    return (
        <div className={classes.dashboardContainer}>
            <h1 className={classes.title}>Dashboard</h1>
            <div className={classes.cardContainer}>
                <div className={classes.card}>
                    <h2>Total Challenges</h2>
                    <p>10</p>
                </div>
                <div className={classes.card}>
                    <h2>Completed Challenges</h2>
                    <p>{completedChallenges.length}</p>
                </div>
                <div className={classes.card}>
                    <h2>Pending Challenges</h2>
                    <p>3</p>
                </div>
                <div className={classes.card}>
                    <h2>Active Users</h2>
                    <p>150</p>
                </div>
            </div>

            {completedChallenges.length > 0 ? (
                <div className={classes.completedChallengesContainer}>
                    <h2>Completed Challenges:</h2>
                    <ul className={classes.completedChallengesList}>
                        {completedChallenges.map((challenge, index) => (
                            <li key={index} className={classes.completedChallengeItem}>
                                <h3>{challenge.title}</h3>
                                <p>{challenge.result}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className={classes.noChallengesMessage}>
                    <h2>No completed challenges yet.</h2>
                </div>
            )}

            <div className={classes.linkContainer}>
                <Link to="/challenges" className={classes.linkBtn}>View Challenges</Link>
            </div>
        </div>
    );
};

export default Dashboard;
