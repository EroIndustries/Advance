const BUTTON = (ELEMENT, ID, COLOR, WORDS, WORDCOLOR, callback) => {
    CREATEELEMENT("button", ID, (ELEMENTS) => {
        STYLED(ELEMENTS, "width", "98%");
        STYLED(ELEMENTS, "height", "50px");
        STYLED(ELEMENTS, "border-radius", "5px");
        STYLED(ELEMENTS, "background", COLOR || "#cdcdcd50");
        STYLED(ELEMENTS, "border", "none");
        STYLED(ELEMENTS, "outline", "none");
        STYLED(ELEMENTS, "color", WORDCOLOR || "white");
        STYLED(ELEMENTS, "margin", "auto");
        STYLED(ELEMENTS, "margin-top", "2%");
        STYLED(ELEMENTS, "margin-bottom", "2%");
        STYLED(ELEMENTS, "font-size", "18px");
        DISPLAY(ELEMENTS, WORDS || "CLick Here");
        ADD(ELEMENT, ELEMENTS);
        EVENT(ELEMENTS, "click", () => {
            callback();
        });
    });
};
export{BUTTON}