const CLEAR=(ELEMENT)=>{
    if (ELEMENT) {
        ELEMENT.innerHTML='';
    } else {
        document.querySelector("body").innerHTML='';
    }
}
export{CLEAR}