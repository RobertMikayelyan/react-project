import React, { useEffect, useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { Block } from "./components";
import { Text } from "./components";
import { Button } from "./components";
import { Users } from "./pages";
import { Contacts } from "./pages";
import { Input } from "./components";
import { Header } from "./components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import FetchAsync from "./pages/apiCall";

const App = () => {
  return (
    <>
      <GlobalStyles />

      {/* <Route exact path="/Menu">
        <Users />
        <Button>AAAA</Button>
        <Input />
      </Route> */}
      <Header />
      <Switch>
        <Route exact path="/UserList" component={Users} />
        <Route exact path="/Contacts" component={Contacts} />
      </Switch>

      {/* <Route exact path="/Header">
        
      </Route> */}
    </>
  );
};
export default App;
