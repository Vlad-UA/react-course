import React, { useState } from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { MyTextInput } from './inputs/myTextInput';
import { MyRadioButton } from './inputs/myRadioButton';
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
    password: '',
    passwordConfirm: '',
    ...initialDataFromLocalStorage,
  });

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('Required'),
    surname: Yup.string()
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    age: Yup.number()
      .integer('Must be integer')
      .moreThan(6, 'Must be more then 6')
      .lessThan(60, 'Must be less then 60')
      .required('Required'),
    sex: Yup.string()
      .required('Required'),
    speciality: Yup.string()
      .oneOf([
        'designer',
        'developer',
        'writer',
      ], 'Invalid Job')
      .required('Required'),
    password: Yup.string()
      .matches(/(?=.[A-Za-z]+)/, 'Must have symbols')
      .matches(/(?=.[0-9]{3,})/, 'Must have min 3 numbers')
      .min(10, 'Minimum 10 symbols')
      .required('Required'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  return (
    <>
      <Formik
        initialValues={getInitialValues()}
        onSubmit={submitForm}
        validationSchema={validationSchema}
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
            <MyRadioButton
              label="Sex"
              name="sex"
            >
              <option value="male" label="Male" />
              <option value="female" label="Female" />
            </MyRadioButton>
            <MySelect label="Speciality" name="speciality">
              <option value="">Select a job</option>
              <option value="designer">Designer</option>
              <option value="developer">Developer</option>
              <option value="writer">Writer</option>
            </MySelect>
            <MyTextInput
              label="Password"
              type="password"
              name="password"
            />
            <MyTextInput
              label="Confirm password"
              type="password"
              name="passwordConfirm"
            />
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
