import React from 'react';
import { Field } from 'formik';

export const MyCheckbox = ({
  label, id, name, ...props
}) => (
  <div>
    <label htmlFor={id || name}>{label}</label>
    <Field {...props} name={name} type="checkbox" />
  </div>
);
