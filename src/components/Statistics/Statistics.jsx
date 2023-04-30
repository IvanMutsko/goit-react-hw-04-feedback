import PropTypes from 'prop-types';
import { StatName, Value } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatName>
        Good: <Value>{good}</Value>
      </StatName>
      <StatName>
        Neutral: <Value>{neutral}</Value>
      </StatName>
      <StatName>
        Bad: <Value>{bad}</Value>
      </StatName>
      <StatName>
        Total: <Value>{total()}</Value>
      </StatName>
      <StatName>
        Positive feedback: <Value>{positivePercentage()}</Value>
      </StatName>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,

  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
