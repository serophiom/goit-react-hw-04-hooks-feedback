import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.css';

const FeedbackOptions = ({ onIncrementGood, onIncrementNeutral, onIncrementBad }) => (
    <div className="Feedback__controls">
        <button className="btn-item" type="button" onClick={onIncrementGood}>Good</button>
        <button className="btn-item" type="button" onClick={onIncrementNeutral}>Neutral</button> 
        <button className="btn-item" type="button" onClick={onIncrementBad}>Bad</button>  
    </div>
);

FeedbackOptions.propTypes = {
    onIncrementGood: PropTypes.func.isRequired,
    onIncrementNeutral: PropTypes.func.isRequired,
    onIncrementBad: PropTypes.func.isRequired
}

export default FeedbackOptions;
