const EVENT=(ELEMENT,ACTION,callback)=>{

    ELEMENT.addEventListener(ACTION,()=>{

        callback();

    });

};

export{EVENT}