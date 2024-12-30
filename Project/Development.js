const ANDROIDLOGINPAGE=()=>{

    DELETESTORE('','UserEmail');
    DELETESTORE('','UserPassword');

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

        STORE('','UserEmail',ELEMENT);

    });

    INPUT("",'password','*********','',(ELEMENT)=>{

        STORE('','UserPassword',ELEMENT);
        
    });

    BUTTON('','Sign In','','forestgreen',(ELEMENT)=>{

        if (!sessionStorage.getItem('UserEmail')) {

            alert("Enter User Email");

            return;
            
        };

        if (!sessionStorage.getItem('UserPassword')) {

            alert("Enter User Passord");
            
            return;
        };

        if (navigator.onLine) {

            DISPLAY(ELEMENT,'Plaese Wait');

            const LINK='https://docs.google.com/spreadsheets/d/1nUPpLO_Q_LDzIlA4AnaAu2Y87nZ3MbPN14xQD6jBHR0/edit?gid=0#gid=0';

            GETDATA(LINK,'Users',(data)=>{

                FINDER(data,'UserEmail',sessionStorage.getItem('UserEmail'),(MyData)=>{

                    if (MyData) {

                        if (MyData.UserPassword === sessionStorage.getItem("UserPassword") ) {

                            JSONIFICATION(MyData,(StoredData)=>{

                                STORE('local','UserData',StoredData);

                                NAVIGATOR("",ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

                            });
                            
                        } else {
                            
                            alert("Wrong User Password");

                            DISPLAY(ELEMENT,'Sign In');

                        };

                    } else {

                        alert("No User Details");

                        DISPLAY(ELEMENT,'Sign In');

                    };

                });

            });
            
        }else{
            alert("Your Offline")

            DISPLAY(ELEMENT,'Sign In');
        }

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

    CLEAR('');

    FULLVIEW('','',()=>{

    });

    ROUNDFOOTER('',(ELEMENT)=>{

        ICON(ELEMENT,WHITELISTICON,()=>{

        });

        ICON(ELEMENT,WHITEMOVIESICON,()=>{

        });

        ICON(ELEMENT,WHITEUSERHOLDERICON,()=>{

        });

    });

};