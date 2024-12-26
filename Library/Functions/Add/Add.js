const ADD = (ELEMENT, ELEMENT1) => {
    CONDITION(
        ELEMENT,
        () => ELEMENT.append(ELEMENT1),
        () => document.body.append(ELEMENT1)
    );
};
export{ADD};