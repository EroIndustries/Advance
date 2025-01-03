const AUTORUN=()=>{

    DEVICE((device)=>{

        DATENOW((Time)=>{

            const HEADER=['TimeOpened','Device','Active'];

            const DATA=[Time,device,'On'];

            const LINK='https://docs.google.com/spreadsheets/d/1kd15tCp1cX6TIUSsm3GcrfxDvOrmqlTNxAaseR8LBhw/edit?pli=1&gid=1692936594#gid=1692936594';

            CHECKER(navigator.onLine,()=>{

                INSERTDATA(LINK,'StoreAnnoymousDevice',HEADER,DATA,()=>{

                    console.log("Device Updated");

                });

            });
    
        });

    });

    APPCOLOR('#333333');

    NAVIGATOR('',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

    if (navigator.onLine) {

        GETDATA('https://docs.google.com/spreadsheets/d/1kd15tCp1cX6TIUSsm3GcrfxDvOrmqlTNxAaseR8LBhw/edit?gid=4400644#gid=4400644','Store',(data)=>{
        
            const DATA={
                "Name":"Store",
                "data":data
            };
    
            STOREINDEXED('Store','Store',DATA,(MyData)=>{
    
                if (MyData === false ) {
    
                    UPDATEINDEXED('Store','Store',DATA);
    
                };
    
                HIDER(500,()=>{
    
                    if (MyData === true) {
    
                        NAVIGATOR('',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');
        
                        return;
                        
                    };
    
                });
    
            });
    
        });
        
    };

};