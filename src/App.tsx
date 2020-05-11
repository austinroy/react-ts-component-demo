import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import  { DisplayWithoutTS } from './pages/WithoutTS'
import { DisplayWithTS } from './pages/WithTS'

function App() {
  return (
    <div className="App">
      <div>
        <a href="/">With JS</a>
        <br/>
        <a href="/withts">With TS</a>
      </div>
      <br/><br/>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={DisplayWithoutTS}/>
          <Route exact path='/withts' component={DisplayWithTS}/>
          <Route exact path='*' >
            <div>
              404 Page Not Found
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
