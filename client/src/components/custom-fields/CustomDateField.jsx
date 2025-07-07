import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

const CustomDateField = React.memo(({
    control,
    name,
    label,
    rules,
    disabled = false,
    className = '',
    ...props }) => (

    <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
            <div className="mb-3">
                <label htmlFor={name} className="form-label text-white">
                    {label}
                </label>
                <DatePicker
                    {...field}
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                    disabled={disabled}
                    dateFormat="MM/dd/yyyy"
                    className={`form-control ${className} ${error ? 'is-invalid' : ''}`}
                    wrapperClassName="d-block"
                    id={name}
                    aria-describedby={`${name}-error`}
                    aria-invalid={!!error}
                    {...props}
                />
                {error && (
                    <div id={`${name}-error`} className="invalid-feedback">
                        {error.message}
                    </div>
                )}
            </div>
        )}
    />
));

CustomDateField.propTypes = {
    control: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    rules: PropTypes.object,
    disabled: PropTypes.bool,
    className:PropTypes.string
};

export default CustomDateField;