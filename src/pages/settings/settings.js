import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import './settings.scss'

function Settings() {
    let match = useRouteMatch();
    return (
        <div className="settings">
            <div className="left-panel">
                <div className="title-settings">Settings</div>
                <div>
                    <Link to={`${match.url}/change/name`}>
                        <div className="setting-option">Change Name</div>
                    </Link>
                    <Link to={`${match.url}/change/username`}>
                        <div className="setting-option">Change Username</div>
                    </Link>
                    <Link to={`${match.url}/change/password`}>
                        <div className="setting-option">Change Password</div>
                    </Link>
                    <Link to={`${match.url}/change/email`}>
                        <div className="setting-option">Change Email</div>
                    </Link>
                    <Link to={`${match.url}/`}>
                        <div className="setting-option">Signout</div>
                    </Link>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
                    </Link>
                </div>
        </div>
            <div className="right-panel">
                <Switch>
                <Route path={`${match.path}/change/name`}>
                    <ChangeName />
                </Route>
                <Route path={`${match.path}/change/username`}>
                    <ChangeUsername />
                </Route>
                <Route path={`${match.path}/change/password`}>
                    <ChangePassword />
                </Route>
                <Route path={`${match.path}/change/email`}>
                    <ChangeEmail />
                </Route>

                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Settings;

function Topic() {
    let { topicId } = useParams();
    return (
        <div className="option-control">
            <h3>Requested topic ID: {topicId}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi saepe quia libero corrupti cumque praesentium doloribus ipsam eveniet quos quis porro, quaerat perferendis accusamus accusantium labore sunt sit in error. Quo, totam!</p>
        </div>
        
    )
}
function ChangeName() {
    return (
        <div className="option-control">
            <h3>Change name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi saepe quia libero corrupti cumque praesentium doloribus ipsam eveniet quos quis porro, quaerat perferendis accusamus accusantium labore sunt sit in error. Quo, totam!</p>
        </div>
        
    )
}
function ChangeUsername() {
    return (
        <div className="option-control">
            <h3>Change Username</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi saepe quia libero corrupti cumque praesentium doloribus ipsam eveniet quos quis porro, quaerat perferendis accusamus accusantium labore sunt sit in error. Quo, totam!</p>
        </div>
        
    )
}
function ChangePassword() {
    return (
        <div className="option-control">
            <h3>Change Password</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi saepe quia libero corrupti cumque praesentium doloribus ipsam eveniet quos quis porro, quaerat perferendis accusamus accusantium labore sunt sit in error. Quo, totam!</p>
        </div>
        
    )
}
function ChangeEmail() {
    return (
        <div className="option-control">
            <h3>Change Email</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi saepe quia libero corrupti cumque praesentium doloribus ipsam eveniet quos quis porro, quaerat perferendis accusamus accusantium labore sunt sit in error. Quo, totam!</p>
        </div>
        
    )
}

  