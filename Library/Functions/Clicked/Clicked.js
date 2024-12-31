const CLICKED=(ELEMENT,callback)=>{
    ELEMENT.addEventListener('click',()=>{
        callback();
    });
};
export{CLICKED};