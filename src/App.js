import React from "react";
import "./App.css";

import Todo from "./component/todo";
import Redux from "./component/02_ReduxApp";
import Api from "./component/03_API";
import GraphQL from "./component/04_GraphQL";
import MaterialUI from "./component/05_MaterialUI";
import ReducerApp from "./component/01_ReducerApp";
import ApolloClientApp from "./component/06_ApolloClientApp";

import AppRouter from "./router";

const links = [
  { linkText: "Todo", path: "/", component: Todo, exact: true },
  { linkText: "Reducer", path: "/reducer", component: ReducerApp },
  { linkText: "Redux", path: "/redux", component: Redux },
  { linkText: "API", path: "/api", component: Api },
  { linkText: "GraphQL", path: "/graph", component: GraphQL },
  { linkText: "Material UI", path: "/material", component: MaterialUI },
  {
    linkText: "Apollo Client",
    path: "/apollo-client",
    routePath: "/apollo-client",
    component: ApolloClientApp,
    exact: true,
  },
  {
    noLink: true,
    routePath: "/apollo-client/:id",
    component: ApolloClientApp,
  },
];

function App() {
  return <AppRouter links={links} />;
}

export default App;
