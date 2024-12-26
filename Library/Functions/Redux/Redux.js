const REDUX = (DATA, ACTION) => {
    const modifiedData = [];
    DATA.forEach((element) => {
        modifiedData.push(ACTION(element));
    });
    return modifiedData;
};
export{REDUX};