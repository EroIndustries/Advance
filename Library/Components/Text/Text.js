const TEXT=(ELEMENT,TYPE,MESSAGE,callback)=>{
    const MYBODY=document.querySelector('body');
    const MYELEMENT=document.createElement(TYPE||"p");
    MYELEMENT.style.fontSize='18px';
    MYELEMENT.style.position='relative';
    MYELEMENT.style.margin='auto';
    MYELEMENT.innerHTML=MESSAGE||'Your Text';
    if (ELEMENT) {
        ELEMENT.append(MYELEMENT);
    } else {
        MYBODY.append(MYELEMENT);  
    };
    callback(MYELEMENT);
};
export{TEXT};