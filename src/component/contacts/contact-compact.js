import React, { Component } from 'react'
import $ from 'jquery'

import './contact-compact.scss'
export default class ContactCompact extends Component {

    constructor(props) {
        super(props)
        this.optionClick = this.optionClick.bind(this)
    }
    optionClick(e){
        console.log(e.target)

        if($(this).hasClass("active")){
            $(this).removeClass("active")
        }
        else{
            $(this).addClass("active")
        }

        /* $( ".hamburger.hide" ).addClass( "active" );
        $( ".hamburger.hide" ).removeClass( "hide" ); */

    }
    render() {
        return (
            <div className="contact" data-contactId={this.props.contactId}>
                <div className="contact-profile"></div>
                <div className="contact-name">Abhay Vincent</div>
                <div className="contact-option" onClick={this.optionClick}>
                    <div className="option-icon"></div>
                    <div className="option-list">{this.props.contactId}
                    </div>
                </div>
            </div>
        )
    }
}
