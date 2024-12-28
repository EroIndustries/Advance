const ICON=(ELEMENT,callback)=>{
    const MYBODY=document.querySelector('body');
    const MYELEMENT=document.createElement("img");
    MYELEMENT.style.width='25px';
    MYELEMENT.style.height='25px';
    MYELEMENT.style.position='relative';
    MYELEMENT.style.margin='auto';
    MYELEMENT.style.outline='none';
    if (ELEMENT) {
        ELEMENT.append(MYELEMENT);
    } else {
        MYBODY.append(MYELEMENT);  
    };
    callback(MYELEMENT);
};
export{ICON};