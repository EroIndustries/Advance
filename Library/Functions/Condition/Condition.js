const CONDITION = (CONDITION, ACTION, ACTION1) => {
    if (CONDITION) {
        return ACTION();
    } else {
        return ACTION1();
    }
};
export{CONDITION};