import React from "react";
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";

import Home from "./Views/home";
import SignIn from "./Views/signIn";
import SignUp from "./Views/signUp";
import Calendar from "./Views/calendar";
import Attendance from "./Views/attendance";
import AttendanceCode from "./Views/attendanceCode";
import Create from "./Views/create";
import Profile from './Views/profile';

import UserProvider, { AllUsersProvider } from "./Providers/userProvider";
import CalendarProvider from "./Providers/calendarProvider";
import AttendanceProvider from "./Providers/attendanceProvider";

import "./App.css";
import DefaultView from "./Views/default-view";
import PostsProvider from "./Providers/postsProviders";

const App = () => {
  return (
    <CalendarProvider>
      <UserProvider>
        <AllUsersProvider>
          <AttendanceProvider>
            <PostsProvider>
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
                      <DefaultView selection="home">
                        <Home />
                      </DefaultView>
                    </Route>
                    <Route exact={true} path={"/home"}>
                      <DefaultView selection="home">
                        <Home />
                      </DefaultView>
                    </Route>
                    <Route exact={true} path={"/calendar"}>
                      <DefaultView selection="calendar">
                        <Calendar />
                      </DefaultView>
                    </Route>
                    <Route exact={true} path={"/attendance"}>
                      <DefaultView selection="attendance">
                        <AttendanceCode />
                      </DefaultView>
                    </Route>
                    <Route
                      exact={true}
                      path={"/attendance/:code"}
                      render={({ match }) => (
                        <DefaultView selection="attendance">
                          <Attendance match={match} />
                        </DefaultView>
                      )}
                    ></Route>
                    <Route exact={true} path={"/create"}>
                      <DefaultView selection="create">
                        <Create />
                      </DefaultView>
                    </Route>
                    <Route
                      exact={true}
                      path={"/create/:cid"}
                      render={({ match }) => (
                        <DefaultView selection="create">
                          <Create match={match} />
                        </DefaultView>
                      )}
                    ></Route>

                    <Route
                      exact={true}
                      path={"/profile"}
                      render={({ match }) => <Profile />}
                    />
                    <Route
                      exact={true}
                      path={"/profile/:uid"}
                      render={({ match }) => (
                        <DefaultView selection="home">
                          <Home />
                        </DefaultView>
                      )}
                    />
                    <Route
                      render={({ match }) => (
                        <DefaultView>{"Error 404"}</DefaultView>
                      )}
                    />
                  </Switch>
                </HashRouter>
              </div>
            </PostsProvider>
          </AttendanceProvider>
        </AllUsersProvider>
      </UserProvider>
    </CalendarProvider>
  );
};

export default App;
