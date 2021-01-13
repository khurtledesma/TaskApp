import React from "react";
import { HashRouter, Switch, Redirect, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import TodoApp from "./components/todoApp";
import Contact from "./components/contact";


function App() {

    return (
        <HashRouter>
            <NavBar/>
            <Switch>
                <Redirect exact path="/" to="/todo" />
                <Route path="/todo" component={TodoApp} />
                <Route path="/contact" component={Contact} />
                <Route component={Error} />
            </Switch>
        </HashRouter>
    );
  };
  
  export default App;
