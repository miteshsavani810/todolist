import React from "react";

import { Route } from "react-router-dom";

const AppRoute = ({ component, path, routePath = null, exact = false }) => {
  return <Route component={component} exact={exact} path={routePath || path} />;
};

export default AppRoute;
