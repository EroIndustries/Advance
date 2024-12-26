import { CONNECTION } from "../Connection/Connection.js";
const APPLOAD=()=>{
    CONNECTION();
    setTimeout(() => {
        location.href='./index.html';
    }, 2000);
};
export{APPLOAD};