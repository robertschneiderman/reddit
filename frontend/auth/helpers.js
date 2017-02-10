import React from 'react';

export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    return (
        <div>
            <label className="label">{label}</label>
            <input className="input" {...input} type={type} />
            {touched && ((error && <span className="form-error">{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    );
};

export const validate1 = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 6) {
        errors.password = 'Must be at least 6 characters';
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'Required';
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Passwords must match!';
    }
    return errors;
};

export const validate2 = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 6) {
        errors.password = 'Must be at least 6 characters';
    }
    return errors;
};