const ANDROIDHOMEPAGE=()=>{

    CLEAR("");

    FULLVIEW('','',(ELEMENT)=>{

        HOMEAPPS(ELEMENT);

    });

    ROUNDFOOTER('','',(ELEMENT)=>{

        ICON(ELEMENT,WHITEAPPICON,(ELEMENTED)=>{

            CLICKED(ELEMENTED,()=>{
               
                NAVIGATOR('Yes',ANDROIDAPPPAGE,'ANDROIDHOMEPAGE');

            });

        });

        ICON(ELEMENT,WHITEGAMEICON,(ELEMENTED)=>{

            CLICKED(ELEMENTED,()=>{
               
                NAVIGATOR('Yes',ANDROIDGAMEPAGE,'ANDROIDHOMEPAGE');

            });

        });

        ICON(ELEMENT,WHITEUSERHOLDERICON,(ELEMENTED)=>{

            CLICKED(ELEMENTED,()=>{
               
                NAVIGATOR('Yes',ANDROIDUSERPAGE,'ANDROIDHOMEPAGE');

            });

        });

    });

};

const ANDROIDAPPPAGE=()=>{

    CLEAR("");

    FULLVIEW('','',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

        HOMEAPPS(ELEMENT);

    });

    HEADER('','transparent',(ELEMENT)=>{

        ICON(ELEMENT,WHITEBACKICON,(ELEMENTED)=>{

            STYLED(ELEMENTED,'margin-left','1%');

            CLICKED(ELEMENTED,()=>{
               
                NAVIGATOR('Yes',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

            });

        });

        TEXT(ELEMENT,'','Apps',(ELEMENTEDS)=>{

            STYLED(ELEMENTEDS,'text-align','right');
            STYLED(ELEMENTEDS,'margin-right','5%');

        });

    });
};

const ANDROIDGAMEPAGE=()=>{

    CLEAR("");

    FULLVIEW('','',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

        HOMEAPPS(ELEMENT);

    });

    HEADER('','transparent',(ELEMENT)=>{

        ICON(ELEMENT,WHITEBACKICON,(ELEMENTED)=>{

            STYLED(ELEMENTED,'margin-left','1%');

            CLICKED(ELEMENTED,()=>{
               
                NAVIGATOR('Yes',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

            });

        });

        TEXT(ELEMENT,'','Games',(ELEMENTEDS)=>{

            STYLED(ELEMENTEDS,'text-align','right');
            STYLED(ELEMENTEDS,'margin-right','5%');

        });

    });
};

const ANDROIDUSERPAGE=()=>{

    CLEAR("");

    FULLVIEW('','',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

    });

    HEADER('','transparent',(ELEMENT)=>{

        ICON(ELEMENT,WHITEBACKICON,(ELEMENTED)=>{

            STYLED(ELEMENTED,'margin-left','1%');

            CLICKED(ELEMENTED,()=>{
               
                NAVIGATOR('Yes',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

            });

        });

        TEXT(ELEMENT,'','My Profile',(ELEMENTEDS)=>{

            STYLED(ELEMENTEDS,'text-align','right');
            STYLED(ELEMENTEDS,'margin-right','5%');

        });

    });
};