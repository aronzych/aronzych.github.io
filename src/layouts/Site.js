import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Nav from "../layouts/Nav";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Projects from "../pages/Projects";
import "../styles/Site.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Site = () => {
  return (
    <div class="site">
      <header class="header">
        <NavLink to="/">Aron Zych</NavLink>
      </header>
      <Nav />
      <hr />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={450}>
              <Switch location={location}>
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/gallery" component={Gallery} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
};

export default Site;
