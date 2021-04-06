import React, { useContext } from 'react';
import store from "./store";
import { Provider } from 'react-redux';
import ContentPage from './components/ContentMainPage/ContentPage';
import ErrorPage from './components/Error404/ErrorPage';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';

import { UserContext } from './context/UserContext';

import "./app.scss"

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {

  const { isUser } = useContext(UserContext)
 
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
            <div className="app__content">
            {
              !isUser ? (
                  <Login />
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
        <div id="car-details"></div>
      </Provider>
    </div>
  );
}

export default App;
