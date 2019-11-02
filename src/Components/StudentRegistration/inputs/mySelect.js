import React from 'react';
import { Field } from 'formik';

export const MySelect = ({
  label, name, id, children, ...props
}) => (
  <div>
    <label htmlFor={id || name}>{label}</label>
    <Field {...props} as="select" name={name}>
      { children }
    </Field>
  </div>
);
