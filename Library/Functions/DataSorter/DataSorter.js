const DATASORTER = (ARRAY, ELEMENT, callback) => {
    if (ARRAY.includes(ELEMENT)) {
        callback(true);
    } else {
        callback(false);
    }
};
export{DATASORTER};