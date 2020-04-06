import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import cn from './Input.module.scss';

const Input = props => {
  const { placeholder, type, id, handleChange, value } = props;
  return (
    <input
      className={classNames(cn.input)}
      type={type}
      placeholder={placeholder}
      onChange={event => handleChange(event)}
      value={value}
      id={id}
    />
  );
};

export default Input;

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  id: '',
  handleChange: () => {},
  value: '',
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.string,
};
