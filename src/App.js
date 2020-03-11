import React, { useEffect, useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { Block, Text, Button, Input, Header } from "./components";

import { Users, ToDoList, AllUsers } from "./pages";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <GlobalStyles />

      <Header />

      <Switch>
        <Route exact path="/UserList" component={Users} />
        <Route exact path="/ToDoList" component={ToDoList} />
        <Route exact path="/AllUsers" component={AllUsers} />
      </Switch>
    </>
  );
};
export default App;
