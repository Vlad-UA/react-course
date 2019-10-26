import React from 'react';
import { News } from '../Components/News';
import { Accordion } from '../Components/Accordion';

const accordionData = [
  {
    question: 'What is your name?',
    answer: 'My name is Andrii',
  },

  {
    question: 'Question2?',
    answer: 'Answer2',
  },

  {
    question: 'Question3?',
    answer: 'Answer3',
  },
];


export const Home = () => (
  <>
    <News />
    <Accordion source={accordionData} />
  </>
);
