const FLATBUTTON=(ELEMENT,DATA,COLOR,COLOR2,callback)=>{
    const MYELEMENT=document.createElement("button");
    MYELEMENT.innerHTML=DATA;
    MYELEMENT.style.width='98%';
    MYELEMENT.style.height='50px';
    MYELEMENT.style.border='none';
    MYELEMENT.style.outline='none';
    MYELEMENT.style.marginLeft='1%';
    MYELEMENT.style.background=COLOR2||'#cdcdcd50';
    MYELEMENT.style.marginTop='2%';
    MYELEMENT.style.marginBottom='2%';
    MYELEMENT.style.borderRadius='5px';
    MYELEMENT.style.color=COLOR||'#ffffff';
    if (ELEMENT) {
        ELEMENT.append(MYELEMENT);
    } else {
        document.querySelector("body").append(MYELEMENT);
    };
    MYELEMENT.addEventListener('click',()=>{
        callback();
    });
};
export {FLATBUTTON};