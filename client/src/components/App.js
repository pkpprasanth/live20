import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import UploadVideoPage from "./views/UploadVideoPage/UploadVideoPage"
import DetailVideoPage from "./views/DetailVideoPage/DetailVideoPage"
import SubscriptionPage from "./views/SubscriptionPage/SubscriptionPage"
import Rules from "./views/Rules/Rules"
import Myprofile from "./views/Myprofile/Myprofile"
import Category from "./views/Category/Category"
import Contest from "./views/Contest/Contest"


function App() {
  // backgroundImage: 'linear-gradient(260deg, #2376ae 0%, #c16ecf 100%'
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)',color:'#f4f6f8', }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/video/upload" component={Auth(UploadVideoPage, true)} />
          <Route exact path="/video/:videoId" component={Auth(DetailVideoPage, null)} />
          <Route exact path="/subscription" component={Auth(SubscriptionPage, null)} />
          <Route exact path="/rules" component={Auth(Rules, null)} />
          <Route exact path="/myprofile" component={Auth(Myprofile, null)} />
          <Route exact path="/category" component={Auth(Category, null)} />
          <Route exact path="/contest" component={Auth(Contest, null)} />

        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
