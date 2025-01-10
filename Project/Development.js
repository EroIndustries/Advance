const ANDROIDLOGINPAGE=()=>{

    CLEAR('');

    ICON('',WHITEAPPICON,(ELEMENT)=>{

        STYLED(ELEMENT,'width','30%');
        STYLED(ELEMENT,'height','20%');
        STYLED(ELEMENT,'margin-top','10%');
        STYLED(ELEMENT,'margin-bottom','10%');
        STYLED(ELEMENT,'margin-left','30%');

    });

    ROUNDINPUT('','email','Enter Your Email','',(data)=>{

    });

    ROUNDINPUT('','password','*********','',(data)=>{

    });

    BUTTON('','Sign In','','forestgreen',(ELEMENT)=>{

    },()=>{
        
    });

    BUTTON('','Create Account','','blue',()=>{

        NAVIGATOR('Yes',ANDROIDCREATEPAGE,'ANDROIDLOGINPAGE');

    },()=>{
        
    });

};

const ANDROIDCREATEPAGE=()=>{

    CLEAR('');

    ICON('',WHITEAPPICON,(ELEMENT)=>{

        STYLED(ELEMENT,'width','30%');
        STYLED(ELEMENT,'height','20%');
        STYLED(ELEMENT,'margin-top','10%');
        STYLED(ELEMENT,'margin-bottom','10%');
        STYLED(ELEMENT,'margin-left','30%');

    });

    ROUNDINPUT('','','Enter Your Name','',(data)=>{

    });

    ROUNDINPUT('','email','Enter Your Email','',(data)=>{

    });

    ROUNDINPUT('','password','*********','',(data)=>{

    });

    BUTTON('','Sign Up','','forestgreen',()=>{

    },()=>{
        
    });

    BUTTON('','Log In','','blue',()=>{

        NAVIGATOR('',ANDROIDLOGINPAGE,'ANDROIDLOGINPAGE');

    },()=>{
        
    });

};