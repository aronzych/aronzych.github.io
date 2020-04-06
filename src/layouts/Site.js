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
              <CSSTransition
                key={location.pathname}
                classNames="fade"
                timeout={450}
              >
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
      <div onClick={handleClick} className="site__arrow">
        <i className="fas fa-long-arrow-alt-up"></i>
      </div>
    </>
  );
};

export default Site;
