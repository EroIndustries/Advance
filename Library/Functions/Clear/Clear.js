const CLEAR=(ELEMENT,DATA)=>{
    const MYBODY=document.querySelector('body');
    if (ELEMENT) {
        ELEMENT.innerHTML=DATA; 
    } else {
        MYBODY.innerHTML=DATA;   
    };
};
export{CLEAR};