const HOMEAPPS=(ELEMENT)=>{

    GETINDEXED('Store','Store',(data)=>{

        REDUX(data,(element)=>{

            REDUX(element.data,(Element)=>{

                VIEW(ELEMENT,(ELEMENTED)=>{

                    STYLED(ELEMENTED,'width','48%');
                    STYLED(ELEMENTED,'display','inline-table');
                    STYLED(ELEMENTED,'margin','auto');
                    STYLED(ELEMENTED,'margin-left','0.5%');
                    STYLED(ELEMENTED,'margin-right','0.5%');
                    STYLED(ELEMENTED,'margin-top','3%');

                    ICON(ELEMENTED,Element.AppImage,(ELEMENTEDS)=>{

                        STYLED(ELEMENTEDS,'width','100%');
                        STYLED(ELEMENTEDS,'height','80%');
                        
                    });
                   
                });

                console.log(Element);

            });

        });

    });

};