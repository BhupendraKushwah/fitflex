import React, { memo } from 'react';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

const CustomInputField = memo(({ control,
  name,
  label,
  placeholder,
  rules,
  type = 'text',
  disabled = false,
  className = '',
  ...props }) => (

  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState: { error } }) => (
      <div className="mb-2">
        <label htmlFor={name} className="form-label font-13 text-white">
          {label}
        </label>
        <input
          {...field}
          type={type}
          className={`form-control bg-dark text-white border-secondary ${className} ${error ? 'is-invalid' : ''}`}
          id={name}
          placeholder={placeholder}
          disabled={disabled}
          aria-describedby={`${name}-error`}
          aria-invalid={!!error}
          {...props}
        />
        {error && (
          <div id={`${name}-error`} className="invalid-feedback font-13">
            {error.message}
          </div>
        )}
      </div>
    )}
  />
));

CustomInputField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  rules: PropTypes.object,
  type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'tel']),
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default CustomInputField;