import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import AppLink from "./link";
import AppRoute from "./route";

import "./router.css";

const AppRouter = ({ links }) => {
  return (
    <Router>
      <div className={"nav-bar"}>
        {links
          .filter((link) => !link.noLink)
          .map((link, index) => (
            <AppLink key={index} {...link} />
          ))}
      </div>
      <Switch>
        {links.map((link, index) => (
          <AppRoute key={index} {...link} />
        ))}
      </Switch>
    </Router>
  );
};

export default AppRouter;
