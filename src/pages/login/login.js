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
                    <div className="signup-redirect form" onClick={this.switchToSignup}>Signup</div>
                    <div className="login-redirect form" onClick={this.switchToLogin}>Login</div>
                </div>
                <div className="image-panel signup-image">SIGNUP</div>
            </div>
        )
    }
}
