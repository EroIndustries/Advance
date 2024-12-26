const VIEW = (ELEMENT, ID, COLOR, WIDTH, HEIGHT, callback) => {
    CREATEELEMENT("div", ID, (ELEMENTS) => {
        STYLED(ELEMENTS, "position", "relative");
        STYLED(ELEMENTS, "background", COLOR || "#cdcdcd20");
        STYLED(ELEMENTS, "width", WIDTH || "100%");
        STYLED(ELEMENTS, "height", HEIGHT || "100%");
        STYLED(ELEMENTS, "display", "block");
        STYLED(ELEMENTS, "margin", "auto");
        STYLED(ELEMENTS, "overflow-y", "auto");
        STYLED(ELEMENTS, "margin-top", "1%");
        STYLED(ELEMENTS, "margin-bottom", "2%");
        STYLED(ELEMENTS, "border-radius", "5px");
        ADD(ELEMENT, ELEMENTS);
        callback(ELEMENTS);
    });
};
export{VIEW};