const INPUT=(ELEMENT)=>{
    const MYBODY=document.querySelector('body');
    const MYELEMENT=document.createElement("Input");
    MYELEMENT.style.width='95%';
    MYELEMENT.style.height='32px';
    MYELEMENT.style.position='relative';
    MYELEMENT.style.left='1%';
    MYELEMENT.style.marginTop='1rem';
    MYELEMENT.style.outline='none';
    if (ELEMENT) {
        ELEMENT.append(MYELEMENT);
    } else {
        MYBODY.append(MYELEMENT);  
    };
};
export{INPUT};