import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ variant, children, onClick}) => {
  Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary']).isRequired
  };

  return (
    <button className={`button--${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default Button;
