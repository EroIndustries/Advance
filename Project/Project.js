const AUTORUN=()=>{

    APPCOLOR('black');

    CONDITION(localStorage.getItem('UserData'),()=>{

        NAVIGATOR("",ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

    },()=>{

        NAVIGATOR("",ANDROIDLOGINPAGE,'ANDROIDLOGINPAGE');

    });

};