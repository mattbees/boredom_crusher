import React, { Fragment } from "react";
import FormContainer from "./FormContainer";
// import ActivityContainer from "./ActivityContainer";

// import
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';


const Main = (props) => {

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={FormContainer} />
        {/*<Route path="/activities" component={ActivityContainer} />*/}
      </Fragment>
    </Router>
  );

}

export default Main;
