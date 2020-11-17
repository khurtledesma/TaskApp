import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import ToDo from "./components/todos"
import Contact from "./components/contact"


const App = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Redirect exact path="/" to="/todo" />
                <Route path="/todo" component={ToDo} />
                <Route path="/contact" component={Contact} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    );
  };
  
  export default App;
  