const IFRAME=(ELEMENT,SOURCE,COLOR,callback)=>{
    const MYBODY=document.querySelector('body');
    const MYELEMENT=document.createElement("iframe");
    MYELEMENT.style.position='absolute';
    MYELEMENT.style.width='100%';
    MYELEMENT.style.height='100%';
    MYELEMENT.style.top='0';
    MYELEMENT.style.bottom='auto';
    MYELEMENT.style.border='none';
    MYELEMENT.style.display='block';
    MYELEMENT.style.background=COLOR||'#cdcdcd10';
    MYELEMENT.style.overflowX='hidden';
    MYELEMENT.style.overflowY='auto';
    MYELEMENT.src=SOURCE;
    if (ELEMENT) {
        ELEMENT.append(MYELEMENT);
    } else {
        MYBODY.append(MYELEMENT);  
    };
    callback(MYELEMENT);
};
export{IFRAME};