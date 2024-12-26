const DEJSON = (STORAGE, KEY, callback) => {
    let JSONDATA = "";
    CONDITION(
        STORAGE,
        () => {
            JSONDATA = localStorage.getItem(KEY);
            return JSONDATA;
        },
        () => {
            JSONDATA = sessionStorage.getItem(KEY);
            return JSONDATA;
        }
    );
    if (JSONDATA) {
        let data = JSON.parse(JSONDATA);
        return callback(data);
    } else {
        console.error("No data found in storage");
        return null;
    }
};
export{DEJSON}