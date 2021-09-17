import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import BubblePage from './components/BubblePage'
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="#">logout</a>
        </header>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/BubblePage" component={BubblePage} />
      </div>

    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.