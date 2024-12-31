const FOOTER=(ELEMENT,COLOR,callback)=>{
    const MYBODY=document.querySelector('body');
    const MYELEMENT=document.createElement("footer");
    MYELEMENT.style.position='absolute';
    MYELEMENT.style.width='100%';
    MYELEMENT.style.height='50px';
    MYELEMENT.style.bottom='0px';
    MYELEMENT.style.display='inline-flex';
    MYELEMENT.style.background=COLOR||'#cdcdcd20';
    MYELEMENT.style.overflow='hidden';
    if (ELEMENT) {
        ELEMENT.append(MYELEMENT);
    } else {
        MYBODY.append(MYELEMENT);  
    };
    callback(MYELEMENT);
};
export{FOOTER};