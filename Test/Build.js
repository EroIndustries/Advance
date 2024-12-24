const AUTORUN=()=>{

    APPMODE('red');

    FLATHEADER('',(ELEMENT)=>{

        ICON(ELEMENT,WHITEAPPICON,(ELES)=>{

            EVENT(ELES,'click',()=>{

                STYLED(ELEMENT,'background','orange');

            });

        });

    });

    FLATFOOTER('',(ELEMENT)=>{

        ICON(ELEMENT,WHITEAPPICON,(ELES)=>{

            EVENT(ELES,'click',()=>{

                STYLED(ELEMENT,'background','orange');

            });

        });

    });

};