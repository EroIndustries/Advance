const AUTORUN=()=>{

    APPCOLOR("#000000");

    CONDITION(localStorage.getItem('UserData'),()=>{

        NAVIGATOR('',ANDROIDLOGINPAGE,'ANDROIDLOGINPAGE');

    },()=>{

        NAVIGATOR('',ANDROIDLOGINPAGE,'ANDROIDLOGINPAGE');

    });

}