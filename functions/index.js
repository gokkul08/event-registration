const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const firestore = admin.firestore();

exports.sendMail = functions.firestore
  .document("responses/{responseId}")
  .onCreate(async (snapshot, context) => {
    const { responseId } = context.params;
    const responseRef = firestore.doc(`responses/${responseId}`);
    const snap = await responseRef.get("user");
    const user = snap.get("user");
    const userMail = user.email;
    admin
      .firestore()
      .collection("mail")
      .add({
        to: userMail,
        message: {
          subject: "IAC Annual Planning Meeting Registration Confirmation",
          html: '<div>Thank you for registering for the IAC Annual Planning Meeting. Please reach out to <a href="mailto: APM2021@iac.com">APM2021@iac.com</a> with any questions.</div>',
        },
      })
      .then(() => console.log("Queued email for delivery!"));
  });
