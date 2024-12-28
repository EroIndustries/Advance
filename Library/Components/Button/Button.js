const BUTTON=(ELEMENT,DATA,COLOR,BGCOLOR,callback)=>{
    const MYBODY=document.querySelector('body');
    const MYELEMENT=document.createElement("button");
    MYELEMENT.style.width='98%';
    MYELEMENT.style.height='50px';
    MYELEMENT.style.position='relative';
    MYELEMENT.style.left='1%';
    MYELEMENT.style.marginTop='1rem';
    MYELEMENT.style.outline='none';
    MYELEMENT.style.border='none';
    MYELEMENT.innerHTML=DATA||'Click Here';
    MYELEMENT.style.background=BGCOLOR||'#cdcdcd80';
    MYELEMENT.style.color=COLOR||'#cdcdcd';
    if (ELEMENT) {
        ELEMENT.append(MYELEMENT);
    } else {
        MYBODY.append(MYELEMENT);  
    };
    MYELEMENT.addEventListener('click',()=>{
        callback();
    });
};
export{BUTTON};