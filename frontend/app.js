import React from 'react';
import Header from './header';
import Dashboard from './dashboard/components';

const App = (props) => (
  <div className="app">
    <Header />
    <Dashboard />
    {props.children}
  </div>
);

export default App;