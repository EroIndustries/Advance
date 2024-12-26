const FACEBOOK = (usernameOrProfileId) => {
    var facebookLink = "https://www.facebook.com/" + encodeURIComponent(usernameOrProfileId);
    window.open(facebookLink);
};
export{FACEBOOK};