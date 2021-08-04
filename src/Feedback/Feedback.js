import { useState } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedBackOptions from '../FeedbackOptins/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import './Feedback.css';

export default function Feedback() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    
    const countIncrementGood = () => {
        setGood((prevState) => prevState + 1);
    };

    const countIncrementNeutral = () => {
        setNeutral((prevState) => prevState + 1);
    };
    
    const countIncrementBad = () => {
        setBad((prevState) => prevState + 1);
    };
    
    const total = good + neutral + bad;
    const positivePercentage = Math.round(good / total * 100)

    return (
        <div className="feedback">
        <Section title="Please leave feedback">
            <FeedBackOptions
            onIncrementGood={countIncrementGood}
            onIncrementNeutral={countIncrementNeutral}
            onIncrementBad={countIncrementBad}
            />
        </Section>

        <Section title="Statistics">
            {total ? (
                <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
                />
            ) : null}
        </Section>
        {total ? null : <Notification message="No feedback given" />}
        </div>
    );
}