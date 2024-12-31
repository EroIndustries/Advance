const JSONADDER = (data, contents, callback) => {
    let MYDATA;
    try {
        MYDATA = JSON.parse(data) || [];
    } catch (e) {
        MYDATA = [];
    }
    contents.forEach((content) => {
        if (!MYDATA.includes(content)) {
            MYDATA.push(content);
        }
    });
    const updatedJSON = JSON.stringify(MYDATA);
    callback(updatedJSON);
};
export{JSONADDER};