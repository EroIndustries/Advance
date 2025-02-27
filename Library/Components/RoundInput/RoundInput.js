const ROUNDINPUT=(ELEMENT,TYPE,HOLDER,COLOR,callback)=>{
    const MYBODY=document.querySelector('body');
    const MYELEMENT=document.createElement("Input");
    MYELEMENT.style.width='95%';
    MYELEMENT.style.height='32px';
    MYELEMENT.style.position='relative';
    MYELEMENT.style.left='1%';
    MYELEMENT.style.padding='1%';
    MYELEMENT.style.marginTop='1rem';
    MYELEMENT.style.outline='none';
    MYELEMENT.type=TYPE||'text';
    MYELEMENT.placeholder=HOLDER||'Your Text';
    MYELEMENT.style.background='transparent';
    MYELEMENT.style.border='1px solid #cdcdcd50';
    MYELEMENT.style.borderRadius='10px';
    MYELEMENT.style.color=COLOR||'#cdcdcd';
    MYELEMENT.autocomplete = 'off';
    MYELEMENT.maxLength = 49000;
    if (ELEMENT) {
        ELEMENT.append(MYELEMENT);
    } else {
        MYBODY.append(MYELEMENT);  
    };
    MYELEMENT.addEventListener('input',()=>{
        callback(MYELEMENT.value);
    });
};
export{ROUNDINPUT};