import React, { Component } from 'react'
import './newContact.scss'
export default class newContact extends Component {
    render() {
        return (
            <div className="new-contact">
                <div class="new-connection">
                    <div class="left">
                        
                        <img class="undrawpizz-haringwxop" src="" />
                    </div>
                    <div class="right">
                        <h2 className="heading">Create new Contact</h2>
                        <div className="profile-image"></div>
                        <div className="inputs">
                            <div className="input name">
                                <p className="name-label">Name :</p>
                                <input type="text" name="contact-name" id="newContact-name" className="name-input"/>
                            </div>
                            <div className="input frequency">
                                <div className="frequency-option">1d</div>
                                <div className="frequency-option">2d</div>
                                <div className="frequency-option">4d</div>
                                <div className="frequency-option">1w</div>
                                <div className="frequency-option">2w</div>
                                <div className="frequency-option">1m</div>
                                <div className="frequency-option">3m</div>
                            </div>
                        </div>
                        <div className="submitButton newContact">Create Contact</div>
                    </div>

                </div>
            </div>
        )
    }
}
