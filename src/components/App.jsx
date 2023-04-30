import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const optionsNames = ['Good', 'Neutral', 'Bad'];

  const handleStatistic = evt => {
    const stateName = evt.target.name;
    console.log(stateName);

    switch (stateName) {
      case 'Good':
        setGood(prevValue => prevValue + 1);
        break;
      case 'Neutral':
        setNeutral(prevValue => prevValue + 1);
        break;
      case 'Bad':
        setBad(prevValue => prevValue + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / countTotalFeedback()) * 100 || 0);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionsNames}
          onLeaveFeedback={handleStatistic}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification text="There is no feedback..." />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </>
  );
};
