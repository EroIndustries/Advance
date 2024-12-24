const FLATHEADER=(ELEMENT,callback)=>{
    const MYELEMENT=document.createElement('header');
    MYELEMENT.style.position='absolute';
    MYELEMENT.style.background='#cdcdcd50';
    MYELEMENT.style.height='50px';
    MYELEMENT.style.width='100%';
    MYELEMENT.style.top='0';
    MYELEMENT.style.display='inline-flex';
    MYELEMENT.style.left='0';
    if (ELEMENT) {
        ELEMENT.append(MYELEMENT);
    } else {
        document.querySelector('body').append(MYELEMENT);    
    }
    callback(MYELEMENT);
};
export{FLATHEADER};