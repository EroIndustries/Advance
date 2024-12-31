const JSONSORTER = (data, key, value, callback) => {
    let DATA = data.filter((item) => item[key] === value);
    callback(DATA);
};
export{JSONSORTER};