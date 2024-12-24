const INPUT=(ELEMENT,TYPE,MESSAGE,COLOR,callback)=>{
    const MYELEMENT=document.createElement('input');
    MYELEMENT.style.position='relative';
    MYELEMENT.style.background='#cdcdcd50';
    MYELEMENT.style.height='32px';
    MYELEMENT.style.width='95%'; 
    MYELEMENT.style.left='2%';
    MYELEMENT.style.border='none';
    MYELEMENT.style.outline='none';
    MYELEMENT.style.marginTop='2%';
    MYELEMENT.style.marginBottom='2%';
    MYELEMENT.style.display='inline-flex';
    MYELEMENT.type=TYPE||'text';
    MYELEMENT.placeholder=MESSAGE||'text';
    MYELEMENT.style.borderRadius='0px';
    MYELEMENT.maxLength=49000;
    MYELEMENT.autocomplete="off";
    MYELEMENT.style.color=COLOR||'#ffffff';
    MYELEMENT.style.borderRadius='5px';
    if (ELEMENT) {
        ELEMENT.append(MYELEMENT);
    } else {
        document.querySelector('body').append(MYELEMENT); 
    };
    MYELEMENT.addEventListener("input",()=>{
        callback(MYELEMENT.value);
    });
};
export{INPUT};