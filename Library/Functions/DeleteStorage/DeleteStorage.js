const DELETESTORE=(STORAGE,NAME)=>{
    if (STORAGE) {
        localStorage.removeItem(NAME);
    } else {
        sessionStorage.removeItem(NAME);
    };
};
export{DELETESTORE};