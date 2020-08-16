import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Detail from "../Routes/Detail";
import Home from "../Routes/Home";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/:id" component={Detail}></Route>
      </Router>
    </>
  );
}

export default App;
