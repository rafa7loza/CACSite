import React from "react";
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";

import Header from "./Components/header";
import Footer from "./Components/footer";

import Home from "./Views/home";
import SignIn from "./Views/signIn";
import SignUp from "./Views/signUp";
import Calendar from "./Views/calendar";

import UserProvider, { AllUsersProvider } from "./Providers/userProvider";

import CalendarProvider from "./Providers/calendarProvider";

import "./App.css";

const App = () => {
  return (
    <CalendarProvider>
      <UserProvider>
        <AllUsersProvider>
          <div className="cac">
            <HashRouter basename={process.env.PUBLIC_URL}>
              <Switch>
                <Route exact={true} path={"/login"}>
                  <SignIn />
                </Route>
                <Route exact={true} path={"/signup"}>
                  <SignUp />
                </Route>
                <Route exact={true} path={"/"}>
                  <>
                    <Header />
                    <Home />
                    <Footer />
                  </>
                </Route>
                <Route exact={true} path={"/home"}>
                  <>
                    <Header />
                    <Home />
                    <Footer />
                  </>
                </Route>
                <Route exact={true} path={"/calendar"}>
                  <>
                    <Header />

                    <Calendar />
                    <Footer />
                  </>
                </Route>

                <Route
                  exact={true}
                  path={"/profile"}
                  render={({ match }) => (
                    <>
                      <Header />
                      <Home match={match} />
                      <Footer />
                    </>
                  )}
                />
                <Route
                  exact={true}
                  path={"/profile/:uid"}
                  render={({ match }) => (
                    <>
                      <Header />
                      <Home match={match} />
                      <Footer />
                    </>
                  )}
                />
                <Route
                  render={({ match }) => (
                    <>
                      <Header />
                      {"404 page not found"}
                      <Footer />
                    </>
                  )}
                />
              </Switch>
            </HashRouter>
          </div>
        </AllUsersProvider>
      </UserProvider>
    </CalendarProvider>
  );
};

export default App;