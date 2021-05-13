import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/header/Header";
import SignInPage from "../pages/SignInPage";
import DashboardPage from "../pages/DashboardPage";

function MainRoute() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact={true} path="/">
            <SignInPage />
          </Route>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default MainRoute;
