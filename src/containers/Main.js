import React, { Component, Fragment } from "react";
import FormContainer from "./FormContainer";
import List from "./List";

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';


const Main = (props) => {

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={FormContainer} />
        <Route path="/wishlist" component={List} />
      </Fragment>
    </Router>
  );

}

export default Main;
