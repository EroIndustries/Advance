const RANDOMCODE = (callback) => {
    let randomDigits = "";
    for (let i = 0; i < 6; i++) {
        randomDigits += Math.floor(Math.random() * 9) + 1;
    }
    callback(randomDigits);
};
export{RANDOMCODE};