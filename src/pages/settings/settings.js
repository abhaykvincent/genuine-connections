import React from 'react'
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import './settings.scss'

function Settings() {
    let match = useRouteMatch();
    return (
        <div className="settings">
            <div className="left-panel">
                <div className="title-settings"><h3>Settings</h3></div>
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
                    <Link to={`/`}>
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
                    <div className="settings-splash">
                        <div className="image"></div>
                    </div>
                    
                </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Settings;

/* function Topic() {
    let { topicId } = useParams();
    return (
        <div className="option-control">
            <h3>Requested topic ID: {topicId}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi saepe quia libero corrupti cumque praesentium doloribus ipsam eveniet quos quis porro, quaerat perferendis accusamus accusantium labore sunt sit in error. Quo, totam!</p>
        </div>
        
    )
} */
function ChangeName() {
    return (
        <div className="option-control change-name">
            <div className="title"><h3>Change name</h3></div>
            <div className="image"></div>
            <div className="inputs">
                <div className="input">
                    <div className="label">Name</div>
                    <input type="text"/>
                </div>
            </div>
            <div className="submit">
                <div className="change-name-submit">Change Names</div>
            </div>
        </div>
        
    )
}
function ChangeUsername() {
    return (
        <div className="option-control change-username">
            <div className="title"><h3>Change Username</h3></div>
            <div className="image"></div>
            <div className="inputs">
                <div className="input">
                    <div className="label">Username</div>
                    <input type="text"/>
                    <div className="message">
                        <p>Username exists</p>
                    </div>
                </div>
            </div>
            <div className="submit">
                <div className="change-name-submit">Change Username</div>
            </div>
        </div>
        
    )
}
function ChangePassword() {
    return (
        <div className="option-control change-password">
            <div className="title"><h3>Change Password</h3></div>
            <div className="image"></div>
            <div className="inputs">
                <div className="input">
                    <div className="label">CURRENT Password</div>
                    <input type="text"/>
                </div>
                <div className="input">
                    <div className="label">New Password</div>
                    <input type="text"/>
                    <div className="message">
                        <p>Use different password</p>
                    </div>
                </div>
            </div>
            <div className="submit">
                <div className="change-name-submit">Change Password</div>
            </div>
        </div>
        
    )
}
function ChangeEmail() {
    return (
        <div className="option-control change-email">
            <div className="title"><h3>Change Email</h3></div>
            <div className="image"></div>
            <div className="inputs">
                <div className="input">
                    <div className="label">Email</div>
                    <input type="text"/>
                    <div className="message">
                        <p>Email already in use</p>
                    </div>
                </div>
            </div>
            <div className="submit">
                <div className="change-name-submit">Change Email</div>
            </div>
        </div>
        
    )
}

  