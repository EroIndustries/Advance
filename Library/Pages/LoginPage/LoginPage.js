const LOGINPAGE=()=>{

    APPMODE("#000000");

    SCROLLVIEW('',(ELEMENT)=>{

        CLEAR(ELEMENT);

        BREAK(ELEMENT);

        STYLED(ELEMENT,'background','transparent');

        ICON(ELEMENT,WHITEAPPICON,(ELEMENTS)=>{

            STYLED(ELEMENTS,'width','40%');
            STYLED(ELEMENTS,'height','30%');

        });

        BREAK(ELEMENT);

        INPUT(ELEMENT,'email','Enter Email','',(data)=>{

        });

        INPUT(ELEMENT,'password','*******','',(data)=>{

        });

        BUTTON(ELEMENT,'Sign In','','forestgreen',()=>{

        });

        BUTTON(ELEMENT,'Create Account','','blue',()=>{

        });

    });

};
export{LOGINPAGE};