import React from 'react';
import { News } from '../Components/News';
import data from './source';

export const Home = () => <News source={data} />;
