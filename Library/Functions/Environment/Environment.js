const ENVIRONMENT = (TEXT) => {
    if (TEXT) {
        localStorage.setItem("Environment", "Test");
        document.body.style.top = "0";
        document.body.style.bottom = "0";
    } else {
        localStorage.setItem("Environment", "Production");
        document.body.style.top = "0";
    };
};
export{ENVIRONMENT};