// Challenges.js
import React from 'react';
import Challenge from './challenge';
import classes from './challenges.module.css';
import { Link } from 'react-router-dom';

const challengesData = [
    {
        title: 'Basic Cryptography',
        description: 'Solve this cryptography challenge by breaking the cipher.',
        level: 'Easy',
        category: 'Cryptography',
        id: 1,
    },
    {
        title: 'Web Exploit',
        description: 'Identify and exploit the vulnerability in this web application.',
        level: 'Medium',
        category: 'Web Security',
        id: 2,
    },
    {
        title: 'Binary Reverse Engineering',
        description: 'Reverse engineer this binary file to find the flag.',
        level: 'Hard',
        category: 'Reverse Engineering',
        id: 3,
    },
    {
        title: 'Web Exploit',
        description: 'Identify and exploit the vulnerability in this web application.',
        level: 'Medium',
        category: 'Web Security',
        id: 4,
    },
    {
        title: 'Binary Reverse Engineering',
        description: 'Reverse engineer this binary file to find the flag.',
        level: 'Hard',
        category: 'Reverse Engineering',
        id: 5,
    },
    {
        title: 'Web Exploit',
        description: 'Identify and exploit the vulnerability in this web application.',
        level: 'Medium',
        category: 'Web Security',
        id: 6,
    },
    {
        title: 'Binary Reverse Engineering',
        description: 'Reverse engineer this binary file to find the flag.',
        level: 'Hard',
        category: 'Reverse Engineering',
        id: 7,
    },
];

const Challenges = () => {
    return (
        <div className={classes.challengesContainer}>
            <h1 className={classes.pageTitle}>Available Challenges</h1>
            <div className={classes.challengeList}>
                {challengesData.map((challenge) => (
                    <div key={challenge.id} className={classes.challengeItem}>
                        <Challenge
                            title={challenge.title}
                            description={challenge.description}
                            level={challenge.level}
                            category={challenge.category}
                            id={challenge.id} // تمرير المعرف هنا
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Challenges;
