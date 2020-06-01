import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Provider } from "react-redux";
import store from "./redux/store";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Main from "./containers/main/main";
import NavBar from "./components/layout/Navbar";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <NavBar />
            <Switch>
              <Route path="/register" component={Register}></Route>
              <Route path="/login" component={Login}></Route>
              <Route component={Main}></Route> {/* default component */}
            </Switch>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
