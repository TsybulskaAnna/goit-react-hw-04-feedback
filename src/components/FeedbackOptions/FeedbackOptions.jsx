import s from './FeedbackOptions.module.scss';
import PropTypes from 'prop-types';
function FeedbackOptions({ options, onLeaveFeedback }) {
  const elements = options.map((el, idx) => (
    
        <button key={idx} type="button"  className={s.button} onClick={() => onLeaveFeedback(el)}>
          {el}
        </button>
     
  ));
  return <>{elements}</>;
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};