const MODULER = (PATH, MODULE_NAME, callback) => {
    import(PATH)
    .then((module) => {
        callback(module[MODULE_NAME]);
    })
    .catch((error) => {
        console.error("Error importing module:", error);
    });
};
export{MODULER}