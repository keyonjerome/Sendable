const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
var message;
admin.initializeApp();

/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hello.sendable@gmail.com',
        pass: 'citizen-hacks2019'
    }
});
function createMail(clientEmail, clientName, destEmail, destName) {
    message = "";
    message = "Line\n" + clientEmail + "Line\n" + clientName;
    return message;
}

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        /*Insert company names through string concatenation. ex. On behalf of + "company_name" + we need to... 
        */
        // getting dest email by query string
        const dest = req.query.dest;
        // Get a reference to the database service
        var database = firebase.database();
        // Get the current user
        var user = firebase.auth().currentUser;       
        const mailOptions = {
            from: 'Sendable Team <hello.sendable@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: dest,
            subject:("To whom it may concern, on behalf of our client " + user.uid+  ", under section 4.9 of Schedule 1 of Canada’s federal privacy legislation — The Personal Information Protection and Electronic Documents Act — I am requesting a copy of all personal information held to my person by your organization." 
           +"In general, PIPEDA requires organizations to provide individuals with access to their personal information at free or minimal cost within 30 days. For details about organizations' responsibilities under PIPEDA's access provision see the Office of the Privacy Commissioner's guidance at priv.gc.ca."+                      
            
            + " If you do not normally handle these types of requests, please forward this letter to the person in your organization responsible for privacy compliance." +
            
            + "Please contact me at "+  user.email + "if you require additional information from me before you proceed, and send all information to the email registered with my account on your services."), 
            // email subject
            html: `<p style="font-size: 16px;" onload="createMail()"></p>
                <br />` // email content in HTML
        };

        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if (erro) {
                return res.send(erro.toString());
            }
            return res.send('Sent');
        });
    });
});
