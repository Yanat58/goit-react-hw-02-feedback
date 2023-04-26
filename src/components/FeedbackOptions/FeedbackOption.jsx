import PropTypes from 'prop-types';

export const FeedbackOption = options => {
  return (
    <div className="boxBtn">
      {options.map((option, onLeaveFeedback) => (
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
