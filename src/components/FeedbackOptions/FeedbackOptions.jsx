import PropTypes from 'prop-types';
import { Button, Controls } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Controls>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={onLeaveFeedback}
          name={option}
        >
          {option}
        </Button>
      ))}
    </Controls>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['Good', 'Neutral', 'Bad']))
    .isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
