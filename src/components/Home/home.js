import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './home.module.css';
import Courses from '../courses/couses';

function Home() {
    const navigate = useNavigate(); // Create navigate function

    const handleStartChallenges = () => {
        navigate('/challenges'); // Redirect to the challenges page
    };

    return (
        <div className={classes.home}>
            <section className={classes.hero}>
                <h1 className={classes.heroTitle}>Welcome to the CTF Platform</h1>
                <p className={classes.heroDescription}>
                    Test your cybersecurity skills and compete against others in a variety of challenges.
                </p>
                <button onClick={handleStartChallenges} className={classes.ctaBtn}>
                    Start Challenges
                </button>
            </section>

            <section className={classes.features}>
                <div className={classes.feature}>
                    <h2 className={classes.featureTitle}>Explore Challenges</h2>
                    <p className={classes.featureDescription}>
                        Participate in a wide range of cybersecurity challenges including cryptography, web security, and more.
                    </p>
                    <button onClick={handleStartChallenges} className={classes.featureButton}>
                        Explore Challenges
                    </button>
                </div>

                <div className={classes.feature}>
                    <h2 className={classes.featureTitle}>Leaderboard</h2>
                    <p className={classes.featureDescription}>
                        Track your progress and see where you stand among the top cybersecurity enthusiasts.
                    </p>
                    <button onClick={() => navigate('/leaderboard')} className={classes.featureButton}>
                        View Leaderboard
                    </button>
                </div>

                <div className={classes.feature}>
                    <h2 className={classes.featureTitle}>For Beginners & Experts</h2>
                    <p className={classes.featureDescription}>
                        Challenges are designed for all skill levels, from beginners to advanced users.
                    </p>
                </div>
            </section>
            <Courses />

            <section className={classes.cta}>
                <h2 className={classes.ctaTitle}>Join the Competition Now!</h2>
                <p className={classes.ctaDescription}>
                    Register and compete in real-time against others in the cybersecurity world.
                </p>
                <button onClick={() => navigate('/register')} className={classes.ctaBtn}>
                    Register Now
                </button>
            </section>
        </div>
    );
}

export default Home;
