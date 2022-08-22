import React from 'react';

export default function FeedbackOptions({good, bad, neutral}) {


  return (
    <div>
        <button name="good" onClick={good}>Good</button>
        <button name="neutral" onClick={neutral}>Neutral</button>
        <button name="bad" onClick={bad}>Bad</button>
    </div>
  );
};
