const FINDER = (DATA, ELEMENT, ELEMENT1, ACTION) => {
    const user = DATA.find((item) => item[ELEMENT] === ELEMENT1);
    return ACTION(user ? user : false);
};
export{FINDER};