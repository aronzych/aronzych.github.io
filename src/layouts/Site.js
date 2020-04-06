import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Nav from "../layouts/Nav";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Wrong from "../pages/Wrong";
import "../styles/Site.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Site = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="site">
        <header className="header">
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
                  <Route path="/contact" component={Contact} />
                  <Route component={Wrong} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
      <div className="site__arrow">
        <i onClick={handleClick} className="fas fa-arrow-circle-up"></i>
      </div>
    </>
  );
};

export default Site;
