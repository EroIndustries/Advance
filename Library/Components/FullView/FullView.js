const FULLVIEW=(ELEMENT,callback)=>{
    const MYBODY=document.querySelector('body');
    const MYELEMENT=document.createElement("div");
    MYELEMENT.style.position='absolute';
    MYELEMENT.style.width='100%';
    MYELEMENT.style.height='100%';
    MYELEMENT.style.display='block';
    MYELEMENT.style.background='#cdcdcd80';
    MYELEMENT.style.overflowX='hidden';
    MYELEMENT.style.overflowY='auto';
    if (ELEMENT) {
        ELEMENT.append(MYELEMENT);
    } else {
        MYBODY.append(MYELEMENT);  
    };
    callback(MYELEMENT);
};
export{FULLVIEW};