const TEXTAREA = (ELEMENT, ID, MSG, callback) => {
    CREATEELEMENT("textarea", ID, (ELEMENTS) => {
        STYLED(ELEMENTS, "width", "98%");
        STYLED(ELEMENTS, "border", "none");
        STYLED(ELEMENTS, "background", "transparent");
        STYLED(ELEMENTS, "border", "1px solid #cdcdcd50");
        STYLED(ELEMENTS, "height", "30%");
        STYLED(ELEMENTS, "color", "#cdcdcd");
        STYLED(ELEMENTS, "outline", "none");
        STYLED(ELEMENTS, "margin", "auto");
        STYLED(ELEMENTS, "margin-top", "2%");
        STYLED(ELEMENTS, "margin-bottom", "2%");
        STYLED(ELEMENTS, "border-radius", "5px");
        STYLED(ELEMENTS, "font-Size", "18px");
        ELEMENTS.placeholder = MSG || "Enter Your Text";
        ELEMENTS.type = "text";
        ELEMENTS.autocomplete = "off";
        ELEMENTS.maxLength = 49000;
        ADD(ELEMENT, ELEMENTS);
        EVENT(ELEMENTS, "input", () => {
            callback(ELEMENTS.value);
            if (ELEMENTS.value > 49000) {
                STYLED(ELEMENTS, "border", "1px solid red");
            }
        });
    });
};
export{TEXTAREA};