import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../layouts/Main";
import Site from "../layouts/Site";
import "../styles/App.css";
import "../styles/Transition.css";

class App extends React.Component {
  firstLoad = true;

  load = () => {
    this.firstLoad = false;
  };

  render() {
    return (
      <Router basename={process.env.process}>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Main firstLoad={this.firstLoad} load={this.load} />}
          />
          <Route component={Site} />
        </Switch>
      </Router>
    );
  }
}

export default App;
