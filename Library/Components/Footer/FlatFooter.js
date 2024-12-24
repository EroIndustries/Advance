const FLATFOOTER=(ELEMENT,callback)=>{

    const MYELEMENT=document.createElement('footer');

    MYELEMENT.style.position='absolute';
    MYELEMENT.style.background='#c9c6c6';
    MYELEMENT.style.height='50px';
    MYELEMENT.style.width='100%'; 
    MYELEMENT.style.left='0';
    MYELEMENT.style.bottom='0';
    MYELEMENT.style.display='inline-flex';

    if (ELEMENT) {

        ELEMENT.append(MYELEMENT);

    } else {

        document.querySelector('body').append(MYELEMENT);
        
    }

    callback(MYELEMENT);

};

export{FLATFOOTER}