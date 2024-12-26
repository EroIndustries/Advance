const ENVIRONMENTCHECKER = (DEVELOPMENT) => {
    if (localStorage.getItem("Environment") === "Production") {
        ANDROIDDEVICE();
    } else {
        if (localStorage.getItem("Environment") === "Test") {
            DESKTOPDEVICE();
        } else {
            WEBDEVICE();
        }
    }
    if (DEVELOPMENT) {
        DEVELOPMENT();
        return;
    }
};
export{ENVIRONMENTCHECKER};