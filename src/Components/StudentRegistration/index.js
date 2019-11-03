import React, { useState } from 'react';
import { Formik } from 'formik';
import { MyTextInput } from './inputs/myTextInput';
import { MyCheckbox } from './inputs/myCheckbox';
import { MySelect } from './inputs/mySelect';
import { useLocalStorage } from './useLocalStorage';
import { FORM_DATA } from '../../constants/localStorage';

export const StudentRegistration = () => {
  const [isFormCompleted, setFormCompleted] = useState(false);
  const { saveData, loadData } = useLocalStorage();
  const initialDataFromLocalStorage = loadData(FORM_DATA);

  const submitForm = (values) => {
    console.log('values', values);
    setFormCompleted(true);
    saveData(FORM_DATA, values);
  };

  const getInitialValues = () => ({
    firstName: '',
    surname: '',
    age: 0,
    email: '',
    sex: false,
    speciality: '',
    ...initialDataFromLocalStorage,
  });

  return (
    <>
      <Formik
        initialValues={getInitialValues()}
        onSubmit={submitForm}
      >
        {({
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <MyTextInput
              label="First Name"
              type="text"
              name="firstName"
            />
            <MyTextInput
              label="Surname"
              type="text"
              name="surname"
            />
            <MyTextInput
              label="Age"
              type="number"
              name="age"
            />
            <MyTextInput
              label="Email"
              type="email"
              name="email"
            />
            <MyCheckbox
              label="Sex"
              type="checkbox"
              name="sex"
            />
            <MySelect label="Speciality" name="speciality">
              <option value="">Select a job</option>
              <option value="designer">Designer</option>
              <option value="developer">Developer</option>
              <option value="writer">Writer</option>
            </MySelect>
            <button type="submit" disabled={isSubmitting}>
              {initialDataFromLocalStorage ? 'Update data' : 'Submit'}
            </button>
          </form>
        )}
      </Formik>
      {isFormCompleted && <div>Form Completed</div>}
    </>
  );
};
