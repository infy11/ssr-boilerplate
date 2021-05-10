// src/routes.jsx
import React from "react";
import { Route, Switch } from "react-router";
import loadable from "@loadable/component";

const Home = loadable(() => import(/* webpackChunkName: "home" */"./pages/home"), {
  fallback: <div>loading...</div>,
});
const About = loadable(() => import(/* webpackChunkName: "about" */"./pages/About"), {
  fallback: <div>loading...</div>,
});


// we'll need this export later
export const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/about",
    component: About,
    exact: true,
  },
];

const Routes = () => (
  <Switch>
    {routes.map(({ path, component, exact }) => (
      <Route exact={exact} path={path} key={path} component={component} />
    ))}
  </Switch>
);

export default Routes;