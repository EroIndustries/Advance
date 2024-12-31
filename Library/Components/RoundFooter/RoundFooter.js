const ROUNDFOOTER=(ELEMENT,COLOR,callback)=>{
    const MYBODY=document.querySelector('body');
    const MYELEMENT=document.createElement("footer");
    MYELEMENT.style.position='absolute';
    MYELEMENT.style.width='95%';
    MYELEMENT.style.height='50px';
    MYELEMENT.style.left='2.5%';
    MYELEMENT.style.bottom='10px';
    MYELEMENT.style.display='inline-flex';
    MYELEMENT.style.background=COLOR||'#cdcdcd20';
    MYELEMENT.style.overflow='hidden';
    MYELEMENT.style.borderRadius='50px';
    if (ELEMENT) {
        ELEMENT.append(MYELEMENT);
    } else {
        MYBODY.append(MYELEMENT);  
    };
    callback(MYELEMENT);
};
export{ROUNDFOOTER};