const AUTORUN=()=>{

    APPCOLOR("#8979b3");

    CONDITION(localStorage.getItem('UserData'),()=>{

        NAVIGATOR('',ANDROIDLOGINPAGE,'ANDROIDLOGINPAGE');

    },()=>{

        NAVIGATOR('',ANDROIDLOGINPAGE,'ANDROIDLOGINPAGE');

    });

}