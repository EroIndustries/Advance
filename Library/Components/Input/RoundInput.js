const ROUNDINPUT = (ELEMENT, ID, MSG, TYPE, callback) => {
    CREATEELEMENT("input", ID, (ELEMENTS) => {
        STYLED(ELEMENTS, "width", "97%");
        STYLED(ELEMENTS, "border", "1px solid #cdcdcd50");
        STYLED(ELEMENTS, "background", "transparent");
        STYLED(ELEMENTS, "height", "32px");
        STYLED(ELEMENTS, "color", "#cdcdcd");
        STYLED(ELEMENTS, "outline", "none");
        STYLED(ELEMENTS, "margin", "auto");
        STYLED(ELEMENTS, "margin-top", "2%");
        STYLED(ELEMENTS, "margin-bottom", "2%");
        STYLED(ELEMENTS, "border-radius", "50px");
        STYLED(ELEMENTS, "padding", "1%");
        ELEMENTS.placeholder = MSG || "Enter Your Text";
        ELEMENTS.type = TYPE || "text";
        ADD(ELEMENT, ELEMENTS);
        EVENT(ELEMENTS, "input", () => {
            callback(ELEMENTS.value);
        });
    });
};
export{ROUNDINPUT};