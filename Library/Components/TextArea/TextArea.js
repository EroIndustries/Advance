const TEXTAREA=(ELEMENT,MESSAGE,COLOR,callback)=>{
    const MYELEMENT=document.createElement('textarea');
    MYELEMENT.style.position='relative';
    MYELEMENT.style.background='#cdcdcd50';
    MYELEMENT.style.height='100px';
    MYELEMENT.style.width='95%'; 
    MYELEMENT.style.left='2%';
    MYELEMENT.style.border='none';
    MYELEMENT.style.outline='none';
    MYELEMENT.style.marginTop='2%';
    MYELEMENT.style.marginBottom='2%';
    MYELEMENT.style.display='inline-flex';
    MYELEMENT.type='Your Text';
    MYELEMENT.placeholder=MESSAGE||'text';
    MYELEMENT.style.borderRadius='0px';
    MYELEMENT.maxLength=49000;
    MYELEMENT.autocomplete="off";
    MYELEMENT.style.color=COLOR||'#ffffff';
    if (ELEMENT) {
        ELEMENT.append(MYELEMENT);
    } else {
        document.querySelector('body').append(MYELEMENT); 
    };
    MYELEMENT.addEventListener("input",()=>{
        callback(MYELEMENT.value);
    });
};
export{TEXTAREA};