const ICONED=(ELEMENT,SOURCE,callback)=>{
    const MYELEMENT=document.createElement('img');
    MYELEMENT.style.position='relative';
    MYELEMENT.style.height='25px';
    MYELEMENT.style.width='25px';
    MYELEMENT.style.margin='auto';
    MYELEMENT.style.display='block';
    MYELEMENT.src=SOURCE;
    if (ELEMENT) {
        ELEMENT.append(MYELEMENT);
    } else {
        document.querySelector('body').append(MYELEMENT);    
    };
    callback(MYELEMENT);
};
export{ICONED};