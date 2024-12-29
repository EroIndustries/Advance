const VIEW=(ELEMENT,callback)=>{
    const MYBODY=document.querySelector('body');
    const MYELEMENT=document.createElement("div");
    MYELEMENT.style.position='relative';
    MYELEMENT.style.width='98%';
    MYELEMENT.style.height='40%';
    MYELEMENT.style.display='block';
    MYELEMENT.style.background='#cdcdcd20';
    MYELEMENT.style.overflowX='hidden';
    MYELEMENT.style.overflowY='auto';
    MYELEMENT.style.marginTop='1%';
    MYELEMENT.style.marginBottom='1%';
    MYELEMENT.style.left='1%';
    MYELEMENT.style.borderRadius='5px';
    if (ELEMENT) {
        ELEMENT.append(MYELEMENT);
    } else {
        MYBODY.append(MYELEMENT);  
    };
    callback(MYELEMENT);
};
export{VIEW};