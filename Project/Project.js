const AUTORUN=()=>{

    DEVICE((device)=>{

        DATENOW((Time)=>{

            CHECKER(!localStorage.getItem('Activity'),()=>{

                JSONADDER([],[new Date()],(data)=>{
        
                    STORE('local','Activity',data);
        
                });
               
            });

            CHECKER(localStorage.getItem('Activity'),()=>{

                JSONADDER(localStorage.getItem('Activity'),[new Date()],(data)=>{
        
                    STORE('local','Activity',data);
        
                });
               
            });

            const HEADER=['TimeOpened','Device','Active','Activity','State'];

            const DATA=[Time,device,'On',localStorage.getItem('Activity'),'Verified'];

            const LINK='https://docs.google.com/spreadsheets/d/1kd15tCp1cX6TIUSsm3GcrfxDvOrmqlTNxAaseR8LBhw/edit?pli=1&gid=1692936594#gid=1692936594';

            CHECKER(navigator.onLine,()=>{

                CONDITION(localStorage.getItem("TimeOpened"),()=>{

                    GETDATA(LINK,'StoreAnnoymousDevice',(Mydata)=>{

                        REDUX(Mydata,(Element)=>{
    
                            CHECKER(Element.TimeOpened.toString() === localStorage.getItem('TimeOpened'),()=>{

                                UPDATEDATA(LINK,'StoreAnnoymousDevice',Element.ID,DATA,(data)=>{

                                    console.log(data);

                                });

                            });
                            
                        });
    
                    });

                },()=>{

                    INSERTDATA(LINK,'StoreAnnoymousDevice',HEADER,DATA,(data)=>{

                        CHECKER(data.error === false,()=>{
    
                            STORE("local",'TimeOpened',Time);
    
                        });
    
                    });

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