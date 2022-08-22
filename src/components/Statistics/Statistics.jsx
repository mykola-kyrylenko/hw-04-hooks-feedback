import React from 'react';
import Notification from 'components/Notification/Notification';

export default function Statistics({good, neutral, bad, total, positivePercentage}) {
  return (
    <div>
      {total === 0 ? <Notification message="There is no feedback"/>:
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {(positivePercentage>0) ? positivePercentage: 0}%</li>
        </ul>
      }
  </div>
  )
}

