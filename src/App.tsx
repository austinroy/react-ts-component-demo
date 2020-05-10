import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import  { DisplayWithoutTS } from './pages/WithoutTS'


function App() {
  return (
    <div className="App">
      <div>
        <a href="/">No TS</a>
        <a href="/withts">With TS</a>
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={DisplayWithoutTS}/>
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
