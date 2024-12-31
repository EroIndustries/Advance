const TWITTER = (username) => {
    var twitterLink = "https://twitter.com/" + encodeURIComponent(username);
    window.open(twitterLink);
};
export{TWITTER};