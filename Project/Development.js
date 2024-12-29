const ANDROIDLOGINPAGE=()=>{

    CLEAR('');

    BREAK("");BREAK("");

    IMAGE('',localStorage.getItem("AppIcon"),(ELEMENT)=>{
        STYLED(ELEMENT,'width','50%');
        STYLED(ELEMENT,'height','30%');
        STYLED(ELEMENT,'margin-left','25%');
        CLICKED(ELEMENT,()=>{
            RELOAD();
        });
    });

    INPUT("",'email','Enter Your Email','',(ELEMENT)=>{

    });

    INPUT("",'password','*********','',(ELEMENT)=>{
        
    });

    BUTTON('','Sign In','','forestgreen',()=>{

        alert('')

    });

    BUTTON('','Create Account','','blue',()=>{

        NAVIGATOR("Yes",ANDROIDCREATEACCOUNTPAGE,'ANDROIDLOGINPAGE');

    });

};

const ANDROIDCREATEACCOUNTPAGE=()=>{

    CLEAR('');

    BREAK("");BREAK("");

    IMAGE('',localStorage.getItem("AppIcon"),(ELEMENT)=>{

        STYLED(ELEMENT,'width','50%');
        STYLED(ELEMENT,'height','30%');
        STYLED(ELEMENT,'margin-left','25%');

        CLICKED(ELEMENT,()=>{
            RELOAD();
        });

    });

    INPUT("",'text','Enter Your Name','',(ELEMENT)=>{

    });

    INPUT("",'email','Enter Your Email','',(ELEMENT)=>{

    });

    INPUT("",'password','*********','',(ELEMENT)=>{
        
    });

    BUTTON('','Sign Up','','forestgreen',()=>{

        alert('')

    });

    BUTTON('','Log In','','blue',()=>{

        NAVIGATOR("",ANDROIDLOGINPAGE,'ANDROIDLOGINPAGE');

    });

};

const ANDROIDHOMEPAGE=()=>{

    alert('Working')

};
