import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { book } from '../../navigation/book';

export const Student = () => {
  const {
    isCreated,
    firstName,
    surname,
    age,
    email,
    sex,
    speciality,
  } = useSelector((state) => state.student);

  if (!isCreated) {
    return (
      <>
        Student is not created, you can create it on this
        <Link to={book.studentRegistration}>link</Link>
      </>
    );
  }

  return (
    <>
      <div>Student:</div>
      <div>{`age: ${age}`}</div>
      <div>{`email: ${email}`}</div>
      <div>{`firstName: ${firstName}`}</div>
      <div>{`sex: ${sex}`}</div>
      <div>{`speciality: ${speciality}`}</div>
      <div>{`surname: ${surname}`}</div>
    </>
  );
};
