import React, { Component } from 'react'
import ContactCompact from '../../component/contacts/contact-compact'
import './home.scss'
export default class home extends Component {
    render() {
        return (
            <div className="home">
                <section>
                    <div className="section-head">Contacts</div>
                    <div className="contacts">
                        <ContactCompact/>
                        <ContactCompact/>
                        <ContactCompact/>
                        <ContactCompact/>
                        <ContactCompact/>
                        <ContactCompact/>
                        <ContactCompact/>
                        <ContactCompact/>
                        <ContactCompact/>
                        <ContactCompact/>
                        <ContactCompact/>
                    </div>
                </section>
                <section>
                    <div className="section-head">ADD</div>
                    <div className="tools">
                        <div className="tool"></div>
                        <div className="tool"></div>
                    </div>
                </section>
                <section>
                    <div className="section-head">Graph</div>
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
