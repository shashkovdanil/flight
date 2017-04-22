import React from 'react';

import 'antd/dist/antd.css';

import Header from './Header';
import FlightsContainer from '../containers/FlightsContainer';
import FiltersContainer from '../containers/FiltersContainer';

import '../styles/styles.css';

const App = () => (
  <div>
    <Header />
    <FiltersContainer />
    <FlightsContainer />
  </div>
);

export default App;
