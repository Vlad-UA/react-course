import React from 'react';
import { Field, useField } from 'formik';
import styles from './inputs.module.scss';

export const MyCheckbox = ({
  label, children, ...props
}) => {
  const [, { error, touched }] = useField(props);

  return (
    <div className={touched && error ? styles.error : ''}>
      {`${label}:   `}
      <span>
        { children.map((option) => (
          <span key={option.props.value}>
            <label htmlFor={option.props.value}>{option.props.label}</label>
            <Field type="radio" name={props.name} id={option.props.value} value={option.props.value} />
          </span>
        ))}
      </span>
    </div>
  );
};
