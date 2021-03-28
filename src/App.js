import React, { useState } from 'react';
import ContentPage from './components/ContentMainPage/ContentPage';
import ErrorPage from './components/Error404/ErrorPage';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';

import "./app.scss"

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


function App() {

  const [user, setUser] = useState(true);
 
  return (
    <div className="app">
      <Router>
        
          <div className="app__content">
          {
            !user ? (
              <Route path="/login">
                <Login />
              </Route>
            ) : (
              <Switch>
                 <Route path="/">
                <Sidebar />
                  <div className="app__content__main">
                    <ContentPage />
                  </div>
                </Route>
                <Route path="/*">
                  <ErrorPage />
                </Route>
              </Switch>
            )
          }
          </div>
      </Router>
    </div>
  );
}

export default App;
