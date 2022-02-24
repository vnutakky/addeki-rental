import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import AccessPage from './pages/Access/access.component';

function App() {
  return (
    <div >
    <Switch>
    <Route exact path='/'component={HomePage} />
    <Route path='/access'component={AccessPage} />
   </Switch>
    </div>
  );
}

export default App;
