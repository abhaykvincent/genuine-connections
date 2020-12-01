import React, { Component } from 'react'

import './contact-compact.scss'
export default class ContactCompact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="contact-profile"></div>
                <div className="contact-name">Abhay Vincent</div>
                <div className="contact-option">
                    <div className="option-icon"></div>
                    <div className="option-list"></div>
                </div>
            </div>
        )
    }
}
