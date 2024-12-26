const HIDER = (TIME, callback) => {
    setTimeout(() => {
        callback();
    }, TIME);
};
export{HIDER};