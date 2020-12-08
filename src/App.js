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

function Settings() {
  let match = useRouteMatch();
  return (
    <div>
      <h2>Settings</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

function NewConnection() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}