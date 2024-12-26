const APPCOLOR = (ELEMENT, COLOR) => {
    CONDITION(
        ELEMENT,
        () => STYLED(ELEMENT, "color", COLOR),
        () => (document.body.style.color = COLOR)
    );
};

export{APPCOLOR};