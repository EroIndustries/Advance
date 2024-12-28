const TELEGRAM = (username) => {
    var telegramLink = "https://t.me/" + encodeURIComponent(username);
    window.open(telegramLink);
};
export{TELEGRAM};