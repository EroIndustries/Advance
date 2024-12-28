const IMAGE=(ELEMENT,SOURCE,callback)=>{
    const MYBODY=document.querySelector('body');
    const MYELEMENT=document.createElement("img");
    MYELEMENT.style.width='25px';
    MYELEMENT.style.height='25px';
    MYELEMENT.style.position='relative';
    MYELEMENT.style.margin='auto';
    MYELEMENT.style.outline='none';
    MYELEMENT.src=SOURCE;
    if (ELEMENT) {
        ELEMENT.append(MYELEMENT);
    } else {
        MYBODY.append(MYELEMENT);  
    };
    callback(MYELEMENT);
};
export{IMAGE};