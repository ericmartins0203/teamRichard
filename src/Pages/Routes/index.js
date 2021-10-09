import { Switch, Router } from "react-router-dom";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Router>Home</Router>
      </Switch>
      <Switch>
        <Router>Cataloge</Router>
      </Switch>
      <Switch>
        <Router>Movie:id</Router>
      </Switch>
      <Switch>
        <Router>Login</Router>
      </Switch>
      <Switch>
        <Router>Signup</Router>
      </Switch>
      <Switch>
        <Router>Dashboard</Router>
      </Switch>
    </>
  );
};
