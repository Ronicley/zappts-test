import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignIn from "./Signin";
import SignUp from "./Signup";

const AppRoute = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <SignIn/>
        </Route>
        <Route path="/signup">
          <SignUp/>
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRoute;