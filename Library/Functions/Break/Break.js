const BREAK=(ELEMENT)=>{
    const MYBODY=document.querySelector('body');
    const MYELEMENT=document.createElement("br");
    if (ELEMENT) {
        ELEMENT.append(MYELEMENT); 
    } else {
       MYBODY.append(MYELEMENT);   
    };
};
export{BREAK};