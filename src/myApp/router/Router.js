import React from 'react';
import { Route, Switch } from "react-router-dom";
import ProductDetail from '../ProductDetail/container/ProductDetail';
import Home from './../Home/Container/Home';
import ProductList from './../ProductList/Container/ProductList';
import Login from './../Account/container/Login';
import Register from './../Account/container/Register';
import Cart from './../Cart/container/Cart';
import Map from './../Map/container/Map';
import TrackOrder from './../TrackOrder/container/TrackOrder';
import Account from './../Account/container/Account';
import Contact from './../Contact/container/Contact';
import Card from './../Card/container/Card';
import CardDetail from './../Card/container/CardDetail';

const Router=()=>{
    return (
        <Switch>
            <Route exact path="/" component={Home} ></Route>
            <Route  path="/login" component={Login} ></Route>
            <Route  path="/register" component={Register} ></Route>
            <Route  path="/detail" component={ProductDetail} ></Route>
            <Route  path="/list" component={ProductList} ></Route>
            <Route  path="/cart" component={Cart} ></Route>
            <Route  path="/map" component={Map} ></Route>
            <Route  path="/account" component={Account} ></Route>
            <Route  path="/track" component={TrackOrder} ></Route>
            <Route  path="/card" component={Card} ></Route>
            <Route  path="/cardDetail" component={CardDetail} ></Route>
            <Route  path="/contact" component={Contact} ></Route>
        </Switch>
    )
}

export default Router;