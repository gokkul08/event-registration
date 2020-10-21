const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
// const cors = require('cors')({origin: true});
admin.initializeApp(functions.config().firebase);

const firestore = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

let transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
       user: 'iacapmevents@gmail.com',
       pass: 'iacevents@2020'
   }
});

// exports.thankyou = functions.https.onRequest((req, res) => {
//     cors(req, res, () => {
//         const mailId = req.query.confirm;
//
//         const mailOptions = {
//             from: 'IAC Events - <iacapmevents@gmail.com>',
//             to: mailId,
//             subject: 'IAC Annual Planning Meeting Registration Confirmation',
//             html: `<div>Thank you for registering for the IAC Annual Planning Meeting. We will reach out with the next steps.</div>`
//         };
//
//         return transporter.sendMail(mailOptions, (error, info) => {
//            if (error) {
//                return res.send(error.toString());
//            }
//            return res.send('Mail Sent');
//         });
//     });
// });

exports.sendMail = functions.firestore
    .document("responses/{responseId}")
    .onWrite(async (snapshot, context) => {
        console.log(context);
       const { responseId } = context.params;
       const responseRef = firestore.doc(`responses/${responseId}`);
       const snap = await responseRef.get("user");
       const user = snap.get("user");
       const userMail = user.email;
        const mailOptions = {
            from: 'IAC Events - <iacapmevents@gmail.com>',
            to: userMail,
            subject: 'IAC Annual Planning Meeting Registration Confirmation',
            html: `<div>Thank you for registering for the IAC Annual Planning Meeting. We will reach out with the next steps.</div>`
        };

        return transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error.toString());
            }
            console.log('Mail Sent', info);
        });
    });
