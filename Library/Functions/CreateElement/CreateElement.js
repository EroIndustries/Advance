const CREATEELEMENT = (ITEM, CLASS, callback) => {
    const ELEMENT = document.createElement(ITEM);
    if (CLASS) {
        ELEMENT.classList.add(CLASS);
    };
    return callback(ELEMENT);
};
export{CREATEELEMENT};