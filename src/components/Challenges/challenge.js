// Challenge.js
import React from 'react';
import classes from './challenge.module.css';
import { Link } from 'react-router-dom';

const Challenge = ({ title, description, level, category, id }) => {
    return (
        <div className={classes.challengeCard}>
            <h2 className={classes.title}>{title}</h2>
            <p className={classes.description}>{description}</p>
            <div className={classes.meta}>
                <span className={classes.level}>Level: {level}</span>
                <span className={classes.category}>Category: {category}</span>
            </div>
            {/* استخدم id لعمل رابط للتحدي */}
            <Link to={`/challenges/${id}`} className={classes.startBtn}>
                Start Challenge
            </Link>
        </div>
    );
};

export default Challenge;
