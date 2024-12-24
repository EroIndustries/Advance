const ADD=(HOLDER,ELEMENT,DATA)=>{
    const MYELEMENT=document.createElement(`${ELEMENT}`);
    MYELEMENT.innerHTML=DATA;
    document.querySelector(`${HOLDER||'body'}`).append(MYELEMENT);
};
export{ADD}