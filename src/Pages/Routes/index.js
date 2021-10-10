import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Cataloge from "../Cataloge";
import Movie from "../Movie";
import Signup from "../signup";
import Dashboard from "../Dashboard";
import Login from "../Login";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/Cataloge">
          <Cataloge />
        </Route>

        <Route path="/Movie">
          <Movie />
        </Route>

        <Route path="/Signin">
          <Login />
        </Route>

        <Route path="/Signup">
          <Signup />
        </Route>

        <Route path="/Dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
};
