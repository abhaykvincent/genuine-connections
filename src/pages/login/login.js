import React, { Component } from 'react'
import './login.scss'

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'login'
        };
    
        // This binding is necessary to make `this` work in the callback
        this.switchToLogin = this.switchToLogin.bind(this);
        this.switchToSignup = this.switchToSignup.bind(this);
    }
    switchToLogin() {
        this.setState(state => ({
            page: 'login'
        }));
    }
    switchToSignup() {
        this.setState(state => ({
            page: 'signup'
        }));
    }
    render() {
        return (
            <div className={'login-signup ' + this.state.page}>
                <div className="image-panel login-image">LOGIN</div>
                <div className="forms">
                    <div className="form login-form">
                        <h1 className="title">Login</h1>
                        <div className="inputs">
                            <div className="input">
                                <div className="label">Username</div>
                                <input type="text"/>
                            </div>
                            <div className="input">
                                <div className="label">Password</div>
                                <input type="text"/>
                            </div>
                        </div>
                        <div className="signup-redirect " onClick={this.switchToSignup}>Create a new account</div>
                        <div className="button login-button">Login</div>
                    </div>
                    <div className="form">
                        <h1 className="title">Signup</h1>
                        <div className="inputs">
                            <div className="input">
                                <div className="label">Name</div>
                                <input type="text"/>
                            </div>
                            <div className="input">
                                <div className="label">Username</div>
                                <input type="text"/>
                            </div>
                            <div className="input">
                                <div className="label">Password</div>
                                <input type="text"/>
                            </div>
                            <div className="input">
                                <div className="label">Email</div>
                                <input type="text"/>
                            </div>

                        <div className="login-redirect " onClick={this.switchToLogin}>Login</div>
                            <div className="button login-button">Signup</div>
                        </div>
                        
                    </div>
                </div>
                <div className="image-panel signup-image">SIGNUP</div>
            </div>
        )
    }
}
