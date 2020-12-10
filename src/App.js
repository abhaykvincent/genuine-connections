import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';

import './App.scss'

import Header from './component/header/header'

import Splash from './pages/splash/splash'
import Home from './pages/home/home'

import NewContact from './pages/newContact/newContact'
import Settings from './pages/settings/settings'

import Login from './pages/login/login'
import Signup from './pages/signup/signup'

export default function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Router>
          <div className="page">
            <Switch>
              <Route exact path="/">
                <Splash/>
              </Route>
              <Route path="/home">
                <Home />
              </Route>

              <Route path="/connection/new">
                <NewConnection />
              </Route>
              <Route path="/contact/new">
                <NewContact />
              </Route>

              <Route path="/settings">
                <Settings />
              </Route>

              <Route path="/signup">
                <Signup />
              </Route>

              <Route path="/login">
                <Login />
              </Route>
            </Switch>
            
          
            <Header/>
          </div>
        </Router>   
      </div>
    </ParallaxProvider>
  );
}



function NewConnection() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}