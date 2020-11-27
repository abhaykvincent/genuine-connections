import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";

//Style
import './header.scss'

export default class header extends Component {
    render() {
        return (
            <div className="header">
                <div className="home-button"></div>
                <div className=""></div>
                <div className="panel">
                    <div className="hamburger">
                        <div className="hamburger-icon">
                            <svg id="bold" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m21.25 0h-18.5c-1.517 0-2.75 1.233-2.75 2.75v18.5c0 1.517 1.233 2.75 2.75 2.75h18.5c1.517 0 2.75-1.233 2.75-2.75v-18.5c0-1.517-1.233-2.75-2.75-2.75zm-5.25 17h-8c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1zm0-4h-8c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1zm0-4h-8c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1z"/></svg>
                        </div>
                        <div className="hamburger-menu">
                            <ul>
                                <li>
                                    <Link to="/">Splash</Link>
                                </li>
                                <li>
                                    <Link to="/home">Home</Link>
                                </li>
                                <li>
                                    <Link to="/connection/new">New Connection</Link>
                                </li>
                                <li>
                                    <Link to="/contact/new">New Contact</Link>
                                </li>
                                <li>
                                    <Link to="/settings">Settings</Link>
                                </li>
                                <li>
                                    <Link to="/login ">Login</Link>
                                </li>
                                <li>
                                    <Link to="/signup">Signup</Link>
                                </li>
                            </ul>
            
                        </div>
                    </div>
                </div>

                </div>
        )
    }
}
