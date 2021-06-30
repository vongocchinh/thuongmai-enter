import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './../Home/Container/Home';
const Router=()=>{
    return (
        <Switch>
            <Route exact path="/" component={Home} ></Route>
        </Switch>
    )
}

export default Router;