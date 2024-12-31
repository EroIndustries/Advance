const JSONREMOVER = (data, contents, callback) => {
    let MYDATA;
    try {
        MYDATA = JSON.parse(data) || [];
    } catch (e) {
        MYDATA = [];
    }
    contents.forEach((content) => {
        const index = MYDATA.indexOf(content);
        if (index > -1) {
            MYDATA.splice(index, 1);
        }
    });
    const updatedJSON = JSON.stringify(MYDATA);
    callback(updatedJSON);
};
export{JSONREMOVER};