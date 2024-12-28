const CONDITION=(Term,callback,callback1)=>{
    if (Term) {
        callback();
    } else {
        callback1();   
    };
};
export{CONDITION};