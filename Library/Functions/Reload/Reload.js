const RELOAD=()=>{
    if (localStorage.getItem('Environment')==='Production') {
        Android.reloadPage();
    }else{
        location.href='./index.html';
    };
};
export{RELOAD};