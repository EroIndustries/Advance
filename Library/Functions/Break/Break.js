const BREAK=(ELEMENT)=>{

    const MYELEMENT=document.createElement("br");

    if (ELEMENT) {

        ELEMENT.append(MYELEMENT);
        
    } else {

        document.querySelector("body").append(MYELEMENT);
        
    };

};

export {BREAK}