const INPUT=(ELEMENT,TYPE,HOLDER,COLOR,callback)=>{
    const MYBODY=document.querySelector('body');
    const MYELEMENT=document.createElement("Input");
    MYELEMENT.style.width='95%';
    MYELEMENT.style.height='32px';
    MYELEMENT.style.position='relative';
    MYELEMENT.style.left='1%';
    MYELEMENT.style.marginTop='1rem';
    MYELEMENT.style.outline='none';
    MYELEMENT.type=TYPE||'text';
    MYELEMENT.placeholder=HOLDER||'Your Text';
    MYELEMENT.style.background='transparent';
    MYELEMENT.style.border='none';
    MYELEMENT.style.borderBottom='1px solid #cdcdcd50';
    MYELEMENT.style.color=COLOR||'#cdcdcd';
    if (ELEMENT) {
        ELEMENT.append(MYELEMENT);
    } else {
        MYBODY.append(MYELEMENT);  
    };
    callback(MYELEMENT);
};
export{INPUT};