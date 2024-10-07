import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import classes from './challengeDetails.module.css';
import challengeData from './challengeData'; // استيراد البيانات

const ChallengeDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // Use useNavigate
    const challenge = challengeData[id];

    const [selectedAnswers, setSelectedAnswers] = useState(Array(challenge ? challenge.questions.length : 0).fill(null));
    const [result, setResult] = useState(null);

    if (!challenge) {
        return <div>Challenge not found!</div>;
    }

    const handleOptionChange = (index, value) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[index] = value;
        setSelectedAnswers(updatedAnswers);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const correctAnswers = challenge.questions.map(q => q.answer);
        const score = selectedAnswers.reduce((acc, answer, index) => {
            return acc + (answer === correctAnswers[index] ? 1 : 0);
        }, 0);
        const scoreMessage = `لقد حصلت على ${score} من ${challenge.questions.length}`;

        // Navigate to the Dashboard with title and result
        navigate('/dashboard', { state: { title: challenge.title, result: scoreMessage } });
    };

    return (
        <div className={classes.detailsContainer}>
            <h1>{challenge.title}</h1>
            <h2>Questions:</h2>
            <form onSubmit={handleSubmit}>
                <ul>
                    {challenge.questions.map((item, index) => (
                        <li key={index} className={classes.questionItem}>
                            <p>{item.question}</p>
                            <ul className={classes.optionsList}>
                                {item.options.map((option, optionIndex) => (
                                    <li key={optionIndex} className={classes.option}>
                                        <label>
                                            <input
                                                type="radio"
                                                name={`question${index}`}
                                                value={option}
                                                onChange={() => handleOptionChange(index, option)}
                                            />
                                            {option}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
                <button type="submit" className={classes.submitButton}>Submit</button>
            </form>
            {result && <div className={classes.result}>{result}</div>}
        </div>
    );
};

export default ChallengeDetails;
