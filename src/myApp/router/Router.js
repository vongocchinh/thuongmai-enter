import React from 'react';
import { Route, Switch } from "react-router-dom";
import ProductDetail from '../ProductDetail/container/ProductDetail';
import Home from './../Home/Container/Home';

const Router=()=>{
    return (
        <Switch>
            <Route exact path="/" component={Home} ></Route>
            <Route  path="/detail" component={ProductDetail} ></Route>
        </Switch>
    )
}

export default Router;