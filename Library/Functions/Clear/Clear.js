const CLEAR=(ELEMENT)=>{
    const MYBODY=document.querySelector('body');
    if (ELEMENT) {
        ELEMENT.innerHTML=''; 
    } else {
        MYBODY.innerHTML='';   
    };
};
export{CLEAR};