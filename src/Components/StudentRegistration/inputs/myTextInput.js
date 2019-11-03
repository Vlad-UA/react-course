import React from 'react';
import { Field, useField } from 'formik';
import styles from './inputs.module.scss';

export const MyTextInput = ({ label, ...props }) => {
  const [, { error, touched }] = useField(props);

  return (
    <div className={touched && error ? styles.error : ''}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Field {...props} />
      { touched && error && <span>{error}</span>}
    </div>
  );
};
