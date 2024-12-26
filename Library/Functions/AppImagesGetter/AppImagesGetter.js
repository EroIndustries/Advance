const APPIMAGESGETTER = (ICON, ICONNAME, ICONCOLOR) =>{
    DATAGETTER("AppImages", "AppImages", (data) => {
        if (data.Name === ICONNAME) DECLARATION(ICON, (ELEMENT) => (ELEMENT.src = data[ICONCOLOR] || console.error("Image not found for ICONNAME or ICONCOLOR")));
    });
};
export{APPIMAGESGETTER};