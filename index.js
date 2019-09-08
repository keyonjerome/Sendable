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
        
        const mailOptions = {
            from: 'Sendable Team <hello.sendable@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: dest,
            subject: 'PIPEDA blah blah blah', // email subject
            html: `<p style="font-size: 16px;" onload="createMail()"></p>
                <br />` // email content in HTML
        };

        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if (erro) {
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });
});
