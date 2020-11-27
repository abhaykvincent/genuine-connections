import React, { Component } from 'react'
import {Link} from "react-router-dom";
import $ from 'jquery'

//Style
import './header.scss'

export default class header extends Component {
    constructor(props) {
        super(props)
        this.hamburgerClick = this.hamburgerClick.bind(this)
      }
    hamburgerClick(){

        if($('.hamburger').hasClass("hide")){
            $('.hamburger').removeClass("hide")
        }
        else{
            $('.hamburger').addClass("hide")
        }

        /* $( ".hamburger.hide" ).addClass( "active" );
        $( ".hamburger.hide" ).removeClass( "hide" ); */

    }
    render() {
        return (
            <div className="header">
                <div className="home-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="518" height="68" viewBox="0 0 518 68">
                        <text id="Genuine_Connection" data-name="Genuine Connection" transform="translate(259 54)" fill="rgba(64,64,64,0.63)" font-size="56" font-family="ProductSans-Bold, Product Sans" font-weight="700"><tspan x="-258.356" y="0">Genuine</tspan><tspan y="0" fill="rgba(78,0,27,0.63)" letter-spacing="-0.299em"> </tspan><tspan y="0" fill="rgba(78,0,27,0.63)">Connection</tspan></text>
                    </svg>
                </div>
                <div className=""></div>
                <div className="panel">
                    <div className="hamburger hide">
                        <div className="hamburger-icon"  onClick={this.hamburgerClick} >
                            <svg className="open" id="bold" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m21.25 0h-18.5c-1.517 0-2.75 1.233-2.75 2.75v18.5c0 1.517 1.233 2.75 2.75 2.75h18.5c1.517 0 2.75-1.233 2.75-2.75v-18.5c0-1.517-1.233-2.75-2.75-2.75zm-5.25 17h-8c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1zm0-4h-8c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1zm0-4h-8c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1z"/></svg>
                            </div>
                        <div className="hamburger-menu">
                            <svg className="close"  onClick={this.hamburgerClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.76 511.76"><path d="M436.896 74.869c-99.84-99.819-262.208-99.819-362.048 0-99.797 99.819-99.797 262.229 0 362.048 49.92 49.899 115.477 74.837 181.035 74.837s131.093-24.939 181.013-74.837c99.819-99.818 99.819-262.229 0-362.048zm-75.435 256.448c8.341 8.341 8.341 21.824 0 30.165a21.275 21.275 0 01-15.083 6.251 21.277 21.277 0 01-15.083-6.251l-75.413-75.435-75.392 75.413a21.348 21.348 0 01-15.083 6.251 21.277 21.277 0 01-15.083-6.251c-8.341-8.341-8.341-21.845 0-30.165l75.392-75.413-75.413-75.413c-8.341-8.341-8.341-21.845 0-30.165 8.32-8.341 21.824-8.341 30.165 0l75.413 75.413 75.413-75.413c8.341-8.341 21.824-8.341 30.165 0 8.341 8.32 8.341 21.824 0 30.165l-75.413 75.413 75.415 75.435z"/></svg>
                        
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
