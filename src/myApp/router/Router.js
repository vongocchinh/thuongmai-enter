import React from 'react';
import { Route, Switch } from "react-router-dom";
import ProductDetail from '../ProductDetail/container/ProductDetail';
import Home from './../Home/Container/Home';
import ProductList from './../ProductList/Container/ProductList';
import Login from './../Account/container/Login';
import Register from './../Account/container/Register';
import Cart from './../Cart/container/Cart';

const Router=()=>{
    return (
        <Switch>
            <Route exact path="/" component={Home} ></Route>
            <Route  path="/login" component={Login} ></Route>
            <Route  path="/register" component={Register} ></Route>
            <Route  path="/detail" component={ProductDetail} ></Route>
            <Route  path="/list" component={ProductList} ></Route>
            <Route  path="/cart" component={Cart} ></Route>
        </Switch>
    )
}

export default Router;