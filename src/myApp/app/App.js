import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./../router/Router";
import HeaderContainer from "./../Header/Container/Header";
import "semantic-ui-css/semantic.min.css";
import "./styles/styles.scss";
import Footer from './../Footer/component/Footer';
const App = () => {
  return (
    <>
      <Router>
        <HeaderContainer />
        <Routers />
        <Footer/>
      </Router>
    </>
  );
};
export default App;
