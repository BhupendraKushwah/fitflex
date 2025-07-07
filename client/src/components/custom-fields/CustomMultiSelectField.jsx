import React from 'react';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import Select from 'react-select';

const CustomMultiSelectField = React.memo(({
    control,
    name,
    label,
    options,
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
                    isMulti
                    options={options}
                    isDisabled={disabled}
                    className={`${className}`}
                    classNamePrefix="react-select"
                    onChange={(selected) => field.onChange(selected ? selected.map((opt) => opt.value) : [])}
                    value={options.filter((option) => field.value?.includes(option.value))}
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

CustomMultiSelectField.propTypes = {
    control: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    rules: PropTypes.object,
    disabled: PropTypes.bool,
};

export default CustomMultiSelectField;
