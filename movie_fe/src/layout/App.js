import React from 'react';
import { Route, Switch } from 'react-router';
import { Aside } from './';
import '../assets/css/App.scss';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <div className="wrapper-main">
      <Aside/>
    </div>
  );
}

export default App;
