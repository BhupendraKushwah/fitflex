import React from 'react';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import Select from 'react-select';
const CustomSelectField = React.memo(({
    control,
    name,
    label,
    options,
    placeholder,
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
                <Select
                    {...field}
                    inputId={name}
                    options={options}
                    placeholder={placeholder}
                    isDisabled={disabled}
                    className={`${className}`}
                    classNamePrefix="react-select"
                    onChange={(selected) => field.onChange(selected ? selected.value : '')}
                    value={options.find((option) => option.value === field.value) || null}
                    aria-describedby={`${name}-error`}
                    aria-invalid={!!error}
                    {...{ props }}
                />
                {error && (
                    <div id={`${name}-error`} className="invalid-feedback d-block">
                        {error.message}
                    </div>
                )}
            </div>
        )}
    />
));

CustomSelectField.propTypes = {
    control: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    placeholder: PropTypes.string,
    rules: PropTypes.object,
    disabled: PropTypes.bool,
};

export default CustomSelectField;