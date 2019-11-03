import React from 'react';
import { Link } from 'react-router-dom';
import { FORM_DATA } from '../../constants/localStorage';
import { useLocalStorage } from '../../helpers/useLocalStorage';
import { book } from '../../navigation/book';

export const Student = () => {
  const { loadData } = useLocalStorage();
  const initialDataFromLocalStorage = loadData(FORM_DATA);

  if (!initialDataFromLocalStorage) {
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
      <div>{`age: ${initialDataFromLocalStorage.age}`}</div>
      <div>{`email: ${initialDataFromLocalStorage.email}`}</div>
      <div>{`firstName: ${initialDataFromLocalStorage.firstName}`}</div>
      <div>{`sex: ${initialDataFromLocalStorage.sex}`}</div>
      <div>{`speciality: ${initialDataFromLocalStorage.speciality}`}</div>
      <div>{`surname: ${initialDataFromLocalStorage.surname}`}</div>
    </>
  );
};
