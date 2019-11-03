import React, { useState } from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { MyTextInput } from './inputs/myTextInput';
import { MyCheckbox } from './inputs/myCheckbox';
import { MySelect } from './inputs/mySelect';
import { useLocalStorage } from '../../helpers/useLocalStorage';
import { FORM_DATA } from '../../constants/localStorage';
import { book } from '../../navigation/book';

export const StudentRegistration = () => {
  const [isFormCompleted, setFormCompleted] = useState(false);
  const { saveData, loadData } = useLocalStorage();
  const history = useHistory();

  const initialDataFromLocalStorage = loadData(FORM_DATA);

  const submitForm = (values) => {
    console.log('values', values);

    setFormCompleted(true);
    saveData(FORM_DATA, values);

    history.push(book.student);
  };

  const getInitialValues = () => ({
    firstName: '',
    surname: '',
    age: 0,
    email: '',
    sex: '',
    speciality: '',
    ...initialDataFromLocalStorage,
  });

  const validateFieldEmail = (email) => {
    let error;

    if (!email) {
      error = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      error = 'Invalid email address';
    }

    return error;
  };

  const validateSex = (values) => {
    const errors = {};

    if (!values.sex) {
      errors.sex = 'Required';
    }

    return errors;
  };

  return (
    <>
      <Formik
        initialValues={getInitialValues()}
        onSubmit={submitForm}
        validate={validateSex}
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
              validate={(value) => (!value ? 'Required' : null)}
            />
            <MyTextInput
              label="Surname"
              type="text"
              name="surname"
              validate={(value) => (!value ? 'Required' : null)}
            />
            <MyTextInput
              label="Age"
              type="number"
              name="age"
              validate={(age) => ((age <= 6 || age >= 60) ? 'Must be more 6 and less 60' : null)}
            />
            <MyTextInput
              label="Email"
              type="email"
              name="email"
              validate={validateFieldEmail}
            />
            <MyCheckbox
              label="Sex"
              name="sex"
            >
              <option value="male" label="Male" />
              <option value="female" label="Female" />
            </MyCheckbox>
            <MySelect label="Speciality" name="speciality" validate={(value) => (!value ? 'Required' : null)}>
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
