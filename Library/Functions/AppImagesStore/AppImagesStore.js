const APPIMAGESSTORE = () => {
    if (localStorage.getItem("NetWork")) {
        DATABASESAVER("https://docs.google.com/spreadsheets/d/1kd15tCp1cX6TIUSsm3GcrfxDvOrmqlTNxAaseR8LBhw/edit?gid=1699927392#gid=1699927392", "ImageServer", "AppImages", "AppImages", (data) => {
            if (data === true) {
                console.log("Images Updated");
            } else {
                DATABASEUPDATER("https://docs.google.com/spreadsheets/d/1kd15tCp1cX6TIUSsm3GcrfxDvOrmqlTNxAaseR8LBhw/edit?gid=1699927392#gid=1699927392", "ImageServer", "AppImages", "AppImages");
            }
        });
    } else {
        console.log("No Internet Connection,App Icons Cannot Be Updated");
    }
};
export{APPIMAGESSTORE}