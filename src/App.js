import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Components/User/Landing/Landing"
import PageNotFound from "./Components/404";

import Login from "./Components/User/Login/Login";
import PurchasedCourse from "./Components/User/PurchasedCourse/PurchasedCourse";
import Register from "./Components/User/Register/Register";
import ExploreCourses from "./Components/User/ExploreCourses/ExploreCourses";
import WatchVideo from "./Components/User/WatchVideo/WatchVideo";
import KtuCourses from "./Components/User/KtuCourses/KtuCourses";
import CalicutCourses from "./Components/User/CalicutCourses/CalicutCourses";
import ModuleListing from "./Components/User/ModuleListing/ModuleListing";

import Payment from "./Components/User/Payment/Payment";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login/:next" component={Login} />
        <Route path="/login" component={Login} />

        <Route path="/register" component={Register} />

        <Route path="/explore/courses/:branch" component={ExploreCourses} />
        <Route path="/purchased/courses" exact component={PurchasedCourse} />

        <Route path="/module/listing/:subject/:wherefrom" component={ModuleListing} />

        <Route path="/module/listing/" component={ModuleListing} />

        <Route path="/purchase/course" component={Payment} />

        <Route path="/watch/video/" component={WatchVideo} />

        <Route path="/ktu/courses" component={KtuCourses} />

        <Route path="/calicut/courses" component={CalicutCourses} />

        <Route path="/blob" component={Blob} />

        <Route path="*" component={PageNotFound} />
        </Switch>
        </BrowserRouter>
  );
}

export default App;
