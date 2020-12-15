import React, { Component } from 'react'
import {Link} from "react-router-dom";
import axios from "axios";

import ContactCompact from '../../component/contacts/contact-compact'
import './home.scss'
export default class home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            contacts: [] };
      }
    
      componentDidMount(){
            axios.get('https://us-central1-genuine-connections-a4e91.cloudfunctions.net/api/contacts')
            .then(res => {
                this.contacts=res.data;
                this.setState({contacts: this.contacts});
            })
            console.log(this.state)

            
      }
    render() {
        let contacts=this.state.contacts;
        const listContacts = contacts.map((contact) =>
            <ContactCompact contactId={"1231"} contactName={contact.name}/>
            );
        return (
            <div className="home">
                <section className="contact-section">
                    <div className="section-head">Contacts</div>
                    <div className="contacts">
                        {listContacts}
                    </div>
                </section>
                <section>
                    <div className="section-head">ADD</div>
                    <div className="tools">
                        <div className="tool new-contact-button"></div>
                        <div className="tool record-connections">
                        <Link to="/contact/new"><div className="record">Record Connection</div></Link>
                            
                        </div>
                    </div>
                </section>
                <section>
                    <div className="section-head">Timeline</div>
                    <div className="timeline"></div>
                </section>
                <section>
                    <div className="section-head">NOTIFICATION</div>
                    <div className="notifications">
                        <div className="notification">Notif</div>
                        <div className="notification">Notif</div>
                        <div className="notification">Notif</div>
                        <div className="notification">Notif</div>
                        <div className="notification">Notif</div>
                        <div className="notification">Notif</div>
                    </div>
                </section>
                <section>
                    <div className="section-head">AWARDS</div>
                    <div className="awards">
                        <div className="award"></div>
                        <div className="award"></div>
                        <div className="award"></div>
                        <div className="award"></div>
                        <div className="award"></div>
                        <div className="award"></div>
                    </div>
                </section>
                <section>
                    <div className="section-head">6</div>
                </section>
            </div>
        )
    }
}
