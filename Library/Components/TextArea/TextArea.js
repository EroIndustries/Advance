const TEXTAREA=(ELEMENT,HOLDER,COLOR,callback)=>{
    const MYBODY=document.querySelector('body');
    const MYELEMENT=document.createElement("TextArea");
    MYELEMENT.style.width='95%';
    MYELEMENT.style.height='150px';
    MYELEMENT.style.position='relative';
    MYELEMENT.style.background='transparent';
    MYELEMENT.style.color=COLOR||'#cdcdcd';
    MYELEMENT.style.left='1%';
    MYELEMENT.style.marginTop='1rem';
    MYELEMENT.style.outline='none';
    MYELEMENT.placeholder=HOLDER||'Your Text';
    if (ELEMENT) {
        ELEMENT.append(MYELEMENT);
    } else {
        MYBODY.append(MYELEMENT);  
    }; 
    MYELEMENT.addEventListener('input',()=>{
        callback(MYELEMENT.value);
    });
};
export{TEXTAREA};