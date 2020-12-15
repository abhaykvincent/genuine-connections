const functions = require('firebase-functions');
const app = require('express')();
const {
    getAllContacts
} = require('./handlers/contacts');

/*/// Possible err  fixer ///*/

/*  
    const cors = require('cors');
    app.use(cors()); 
*/

// routes
app.get('/contacts', getAllContacts);