const ANDROIDHOMEPAGE=()=>{

    CLEAR("");

    FULLVIEW('','',(ELEMENT)=>{

        HOMEAPPS(ELEMENT);

    });

    ROUNDFOOTER('','',(ELEMENT)=>{

        ICON(ELEMENT,WHITEAPPICON,(ELEMENTED)=>{

            CLICKED(ELEMENTED,()=>{
                alert("")
            })

        });

        ICON(ELEMENT,WHITEGAMEICON,(ELEMENTED)=>{

        });

        ICON(ELEMENT,WHITEUSERHOLDERICON,(ELEMENTED)=>{

        });


    });

;}
