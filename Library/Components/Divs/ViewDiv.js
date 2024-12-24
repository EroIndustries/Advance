const VIEW=(ELEMENT,callback)=>{
    const MYELEMENT=document.createElement('div');
    MYELEMENT.style.position='relative';
    MYELEMENT.style.background='#cdcdcd50';
    MYELEMENT.style.height='40%';
    MYELEMENT.style.width='98%'; 
    MYELEMENT.style.left='1%';
    MYELEMENT.style.marginTop='1%';
    MYELEMENT.style.marginBottom='1%';
    MYELEMENT.style.overflowY='auto';
    MYELEMENT.style.overflowX='hidden';
    MYELEMENT.style.display='inline-flex';
    MYELEMENT.style.borderRadius='5px';
    if (ELEMENT) {
        ELEMENT.append(MYELEMENT);
    } else {
        document.querySelector('body').append(MYELEMENT);  
    };
    callback(MYELEMENT);
};
export{VIEW};