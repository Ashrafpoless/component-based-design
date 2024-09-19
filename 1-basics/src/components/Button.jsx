import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({text}) => {
  

  return <button className='btn'>{text}</button>;
};

Button.propTypes= {
  text: PropTypes.string.isRequired
};

