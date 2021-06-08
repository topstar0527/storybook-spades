import React from "react";
import { Route } from "react-router-dom";

import Booking from "../Booking";
import Today from "../Today";

// const Empty = () => <div/>;

export default [
    <Route exact path="/" component={Booking} />,
    <Route exact path="/booking" component={Booking} />,
    <Route exact path="/today" component={Today} />
]