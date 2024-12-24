const SCROLLVIEW=(ELEMENT,callback)=>{
    const MYELEMENT=document.createElement('div');
    MYELEMENT.style.position='absolute';
    MYELEMENT.style.background='#c9c6c6';
    MYELEMENT.style.height='auto';
    MYELEMENT.style.width='100%'; 
    MYELEMENT.style.left='0';
    MYELEMENT.style.top='0';
    MYELEMENT.style.bottom='0';
    MYELEMENT.style.overflowY='auto';
    MYELEMENT.style.overflowX='hidden';
    MYELEMENT.style.display='inline-flex';
    if (ELEMENT) {
        ELEMENT.append(MYELEMENT);
    } else {
        document.querySelector('body').append(MYELEMENT);  
    };
    callback(MYELEMENT);
};
export{SCROLLVIEW};