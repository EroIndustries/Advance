const AUTORUN=()=>{

    APPCOLOR('black');

    NAVIGATOR('',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

    GETDATA('https://docs.google.com/spreadsheets/d/1kd15tCp1cX6TIUSsm3GcrfxDvOrmqlTNxAaseR8LBhw/edit?gid=4400644#gid=4400644','Store',(data)=>{
        
        const DATA={
            "Name":"Store",
            "data":data
        };

        STOREINDEXED('Store','Store',DATA,(MyData)=>{

            if (MyData === false ) {

                UPDATEINDEXED('Store','Store',DATA);

            };

        });

    });

};