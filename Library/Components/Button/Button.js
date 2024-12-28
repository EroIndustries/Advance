const BUTTON=(ELEMENT,DATA,callback)=>{
    const MYBODY=document.querySelector('body');
    const MYELEMENT=document.createElement("button");
    MYELEMENT.style.width='98%';
    MYELEMENT.style.height='50px';
    MYELEMENT.style.position='relative';
    MYELEMENT.style.left='1%';
    MYELEMENT.style.marginTop='1rem';
    MYELEMENT.style.outline='none';
    MYELEMENT.innerHTML=DATA||'Click Here';
    if (ELEMENT) {
        ELEMENT.append(MYELEMENT);
    } else {
        MYBODY.append(MYELEMENT);  
    };
    callback(MYELEMENT);
};
export{BUTTON};