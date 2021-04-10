import React from "react";

const Home = React.lazy(() => import("./components/Home"));
const Income = React.lazy(() => import("./components/Income"));
const Expense = React.lazy(() => import("./components/Expense"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/home", exact: true, name: "Home", component: Home },
  {
    path: "/income",
    name: "Income",
    component: Income,
    exact: true,
  },
  {
    path: "/expense",
    name: "Expense",
    component: Expense,
    exact: true,
  },
];

export default routes;
