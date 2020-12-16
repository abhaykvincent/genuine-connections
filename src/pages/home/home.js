import React, { Component } from 'react'
import {Link} from "react-router-dom";
import axios from "axios";


import ContactCompact from '../../component/contacts/contact-compact'
import './home.scss'


import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
            <ListItem button contactId={"1231"} contactName={contact.name}>
                            <ListItemIcon> <InboxIcon/> </ListItemIcon>
                            <ListItemText> <h4>{contact.name}</h4> </ListItemText>
            </ListItem>
            );
        return (
            <div className="home">
                <section className="contact-section">
                    <div className="section-head">Contacts</div>
                    <div className="contacts">
                        <List component="nav" aria-label="main mailbox folders">
                            {listContacts}
                        </List>
                    </div>
                </section>
                <section className="add-section">
                    <div className="section-head">ADD</div>
                    <div className="tools">
                        <div className="tool new-contact-button">
                            <Link to="/contact/new">
                                <span className="tool-label">Add new Person</span> 
                                <Button variant="contained"  
                                    style={{
                                    display: 'inline-block',
                                    backgroundColor: "#f50057",
                                    color: 'white'
                                    }}
                                >
                                    New Contact
                                </Button>
                            </Link>
                        
                        </div>
                        <div className="tool record-connections">
                            <Link to="/connection/new">
                                <span className="tool-label">Record a recent Connection</span> 
                                <Button variant="contained"  
                                    style={{
                                        display: 'inline-block',
                                    backgroundColor: "#f50057",
                                    color: 'white'
                                    }}
                                >
                                    Record
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="section-head">Timeline</div>
                    <div className="timeline"></div>
                </section>
                <section className="notification-section">
                    <div className="section-head">NOTIFICATION</div>
                    <div >
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem button >
                            <ListItemText primary="Lorem ipsum dolor sit amet." /> 
                            <ListItemIcon> <InboxIcon/> </ListItemIcon>
                        </ListItem>
                        <ListItem button >
                            <ListItemText primary="Lorem ipsum dolor sit amet." /> 
                            <ListItemIcon> <InboxIcon/> </ListItemIcon>
                        </ListItem>
                        <ListItem button >
                            <ListItemText primary="Lorem ipsum dolor sit amet." /> 
                            <ListItemIcon> <InboxIcon /> </ListItemIcon>
                        </ListItem>
                        <ListItem button >
                            <ListItemText primary="Lorem ipsum dolor sit amet." /> 
                            <ListItemIcon> <InboxIcon/> </ListItemIcon>
                        </ListItem>
                        <ListItem button >
                            <ListItemText primary="Lorem ipsum dolor sit amet." /> 
                            <ListItemIcon> <InboxIcon/> </ListItemIcon>
                        </ListItem>
                        <ListItem button >
                            <ListItemText primary="Lorem ipsum dolor sit amet." /> 
                            <ListItemIcon> <InboxIcon/> </ListItemIcon>
                        </ListItem>
                    </List>
                    </div>
                </section>
                <section>
                    <div className="section-head">AWARDS</div>
                    <div className="awards">
                        <div className="award">
                        <Card className="award-card">
                            <CardActionArea>
                                <CardContent>
                                    <Typography className="award-winner_name" gutterBottom variant="h5" component="h2">
                                        Mary CG
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Genuine connection of the month
                                    </Typography>

                                    <Typography variant="body1" color="textPrimary" component="p"> 75 Minutes </Typography>
                                </CardContent>

                            </CardActionArea>
                                <CardActions>
                                <Button size="small" variant="outlined" color="secondary"> View contact</Button>
                            </CardActions>
                        </Card> 
                        
                        </div>
                        <div className="award">
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography className="award-winner_name" gutterBottom variant="h5" component="h2">
                                        Soniya
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Genuine connection of the Week
                                    </Typography>
                                    <Typography variant="body1" color="textPrimary" component="p">
                                        75 Minutes
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                                <CardActions>
                                <Button size="small" variant="outlined" color="secondary"> View contact</Button>
                            </CardActions>
                        </Card> 
                        </div>
                        <div className="award">
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography className="" gutterBottom variant="h5" component="h2">
                                        Soniya
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                                <CardActions>
                                <Button size="small" variant="outlined" color="secondary"> View contact</Button>
                            </CardActions>
                        </Card> 
                        </div>
                        <div className="award">
                            <Card>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography className="" gutterBottom variant="h5" component="h2">
                                            Yudhith
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                    <CardActions>
                                    <Button size="small" variant="outlined" color="secondary"> View contact</Button>
                                </CardActions>
                            </Card> 
                        </div>
                        <div className="award">
                            <Card>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography className="" gutterBottom variant="h5" component="h2">
                                            Anuroop
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                    <CardActions>
                                    <Button size="small" variant="outlined" color="secondary"> View contact</Button>
                                </CardActions>
                            </Card> 
                        </div>
                        <div className="award">
                            <Card>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography className="" gutterBottom variant="h5" component="h2">
                                            Ashish
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                    <CardActions>
                                    <Button size="small" variant="outlined" color="secondary"> View contact</Button>
                                </CardActions>
                            </Card> 
                        </div>
                    </div>                                                         
                </section>
                <section>
                    <div className="section-head">6</div>
                </section>
            </div>
        )
    }
}
