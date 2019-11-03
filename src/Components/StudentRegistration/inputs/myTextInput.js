import React from 'react';
import { Field } from 'formik';

export const MyTextInput = ({
  label, name, id, ...props
}) => (
  <div>
    <label htmlFor={id || name}>{label}</label>
    <Field {...props} name={name} />
  </div>
);
