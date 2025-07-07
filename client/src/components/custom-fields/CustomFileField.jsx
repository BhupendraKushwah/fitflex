import React, { useState, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

const CustomFileField = React.memo(({
    control,
    name,
    label,
    accept,
    rules,
    disabled = false,
    className = '',
    ...props }) => {

    const [preview, setPreview] = useState(null);

    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    return (
        <Controller
            name={name}
            control={control}
            rules={{
                ...rules,
                validate: {
                    fileType: (file) => {
                        if (!file || !file[0]) return true;
                        const validTypes = accept.split(',').map((type) => type.trim());
                        return validTypes.includes(file[0].type) || `File must be one of: ${validTypes.join(', ')}`;
                    },
                    fileSize: (file) => {
                        if (!file || !file[0]) return true;
                        return file[0].size <= 5 * 1024 * 1024 || 'File size must be less than 5MB';
                    },
                },
            }}
            render={({ field: { onChange, value, ...field }, fieldState: { error } }) => (
                <div className="mb-3">
                    <label htmlFor={name} className="form-label text-white">
                        {label}
                    </label>
                    <input
                        {...field}
                        type="file"
                        className={`form-control bg-dark text-white border-secondary ${className} ${error ? 'is-invalid' : ''}`}
                        id={name}
                        accept={accept}
                        disabled={disabled}
                        onChange={(e) => {
                            const file = e.target.files;
                            onChange(file);
                            if (file[0] && file[0].type.startsWith('image/')) {
                                setPreview(URL.createObjectURL(file[0]));
                            } else {
                                setPreview(null);
                            }
                        }}
                        aria-describedby={`${name}-error`}
                        aria-invalid={!!error}
                        {...props}
                    />
                    {preview && (
                        <img
                            src={preview}
                            alt="Preview"
                            className="mt-2 rounded"
                            style={{ maxWidth: '100px', maxHeight: '100px' }}
                        />
                    )}
                    {error && (
                        <div id={`${name}-error`} className="invalid-feedback">
                            {error.message || error.fileType?.message || error.fileSize?.message}
                        </div>
                    )}
                </div>
            )}
        />
    );
});

CustomFileField.propTypes = {
    control: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    accept: PropTypes.string.isRequired,
    rules: PropTypes.object,
    disabled: PropTypes.bool,
};

export default CustomFileField;
