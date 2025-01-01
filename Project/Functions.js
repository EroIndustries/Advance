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

                    TEXT(ELEMENTED,'',Element.AppName,(ELEMENTEDS)=>{

                        STYLED(ELEMENTEDS,'text-align','right');
                        STYLED(ELEMENTEDS,'margin-right','5%');
                        STYLED(ELEMENTEDS,'margin-top','3%');

                    })

                    ICON(ELEMENTED,WHITESTARICON,(ELEMENTEDS)=>{

                        STYLED(ELEMENTEDS,'position','absolute');
                        STYLED(ELEMENTEDS,'bottom','9%');
                        STYLED(ELEMENTEDS,'left','2%');
                        
                    });

                    TEXT(ELEMENTED,'',Element.AppRatings,(ELEMENTEDS)=>{

                        STYLED(ELEMENTEDS,'position','absolute');
                        STYLED(ELEMENTEDS,'text-align','left');
                        STYLED(ELEMENTEDS,'bottom','8%');
                        STYLED(ELEMENTEDS,'left','20%');
                        STYLED(ELEMENTEDS,'font-size','25px');
                        STYLED(ELEMENTEDS,'color','forestgreen');
                    })
                   
                    if (Element.ID === 'acb46b20f5afbeb05aa453e' ) {

                        STYLED(ELEMENTED,'display','none');
                        
                    };

                    CLICKED(ELEMENTED,()=>{

                        JSONIFICATION(Element,(MyDaa)=>{

                            STORE('','AppDetails',MyDaa);

                            NAVIGATOR('',APPPAGE,'ANDROIDHOMEPAGE');
    
                        })

                    });

                });

            });

        });

    });

};