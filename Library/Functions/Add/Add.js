const ADD=(ELEMENT,DATA)=>{
    const MYBODY=document.querySelector('body');
    if (ELEMENT) {
        ELEMENT.append(DATA); 
    } else {
       MYBODY.append(DATA);   
    };
};
export{ADD};