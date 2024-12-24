const DISPLAY=(ELEMENT,DATA)=>{
    const MYELEMENT=document.querySelector(`${ELEMENT||'body'}`);
    MYELEMENT.innerHTML=DATA;
};
export{DISPLAY};