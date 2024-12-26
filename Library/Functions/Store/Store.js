const STORE=(STORAGE,NAME,DATA)=>{
    if (STORAGE) {
        localStorage.setItem(NAME,DATA);
    } else {
        sessionStorage.setItem(NAME,DATA);
    };
};
export{STORE};