import PropTypes from 'prop-types';

export const FeedbackOption = ({options, onLeaveFeedback}) => {
  return (
    <div className="boxBtn">
      {options.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
    //
  );
};

FeedbackOption.propType = {
  option: PropTypes.number.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
