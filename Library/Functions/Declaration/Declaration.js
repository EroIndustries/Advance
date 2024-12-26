const DECLARATION = (CLASS, callback) => {
    const ELEMENT = document.querySelector(CLASS);
    return callback(ELEMENT);
};
export{DECLARATION};