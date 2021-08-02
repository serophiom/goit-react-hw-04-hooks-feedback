import React from 'react';
import Statistics from '../Statistics/Statistics';
import FeedBackOptions from '../FeedbackOptins/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import './Feedback.css';

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    countIncrementGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    };

    countIncrementNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    };

    countIncrementBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    };

    render() {
        const total = this.state.good + this.state.neutral + this.state.bad;
        const positivePercentage = Math.round(this.state.good / total * 100)

        return (
            <div className="feedback">
            <Section title="Please leave feedback">
                <FeedBackOptions
                onIncrementGood={this.countIncrementGood}
                onIncrementNeutral={this.countIncrementNeutral}
                onIncrementBad={this.countIncrementBad}
                />
            </Section>

            <Section title="Statistics">
                {total ? (
                    <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={total}
                    positivePercentage={positivePercentage}
                />
                ) : null}
            </Section>
            {total ? null : <Notification message="No feedback given" />}
            </div>
        );
    }
}

export default Feedback;