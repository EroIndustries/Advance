const ANDROIDLOGINPAGE=()=>{

    CLEAR('');

    BREAK("");BREAK("");

    IMAGE('',WHITEAPPICON,(ELEMENT)=>{

        STYLED(ELEMENT,'width','50%');
        STYLED(ELEMENT,'height','30%');
        STYLED(ELEMENT,'margin-left','25%');

    });

    INPUT("",'email','Enter Your Email',(ELEMENT)=>{

    });

    INPUT("",'password','Enter Your Password',(ELEMENT)=>{
        
    });

    BUTTON('','Log In','','',()=>{

        alert('')

    });

    BUTTON('','Create Account','','blue',()=>{

        NAVIGATOR("Yes",ANDROIDCREATEACCOUNTPAGE,'ANDROIDLOGINPAGE');

    });

};

const ANDROIDCREATEACCOUNTPAGE=()=>{

    CLEAR('');

    BREAK("");BREAK("");

    IMAGE('',WHITEAPPICON,(ELEMENT)=>{

        STYLED(ELEMENT,'width','50%');
        STYLED(ELEMENT,'height','30%');
        STYLED(ELEMENT,'margin-left','25%');

    });

    INPUT("",'text','Enter Your Name',(ELEMENT)=>{

    });

    INPUT("",'email','Enter Your Email',(ELEMENT)=>{

    });

    INPUT("",'password','Enter Your Password',(ELEMENT)=>{
        
    });

    BUTTON('','Sign Uo','','',()=>{

        alert('')

    });

    BUTTON('','Log In','','blue',()=>{

        NAVIGATOR("",ANDROIDLOGINPAGE,'ANDROIDLOGINPAGE');

    });

};

const ANDROIDHOMEPAGE=()=>{

    alert('Working')

};
