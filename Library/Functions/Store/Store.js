const STORE=(TYPE,NAME,DATA)=>{
    if (TYPE) {
        localStorage.setItem(NAME,DATA);
    } else {
        sessionStorage.setItem(NAME,DATA);  
    };
};
export{STORE};