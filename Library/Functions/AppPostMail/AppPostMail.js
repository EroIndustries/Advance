const APPPOSTMAIL = (EMAILERAPI, RECIEVEREMAIL, SUBJECT, MESSAGE, Callback) => {
    const DATA = { recipientEmail: RECIEVEREMAIL, subject: SUBJECT, body: MESSAGE };
    POSTPACKAGE(EMAILERAPI, "", DATA, (data) => {
        Callback(data);
    });
};
export{APPPOSTMAIL};