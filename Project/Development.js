const ANDROIDHOMEPAGE=()=>{

    CHECKER(!localStorage.getItem('LikedApps'),()=>{

        JSONADDER([],['9e24b827-9556-4f8f-baf9-13690c819556'],(data)=>{

            STORE('local','LikedApps',data);

        });
       
    });

    CLEAR("");

    FULLVIEW('','',(ELEMENT)=>{

        HOMEAPPS(ELEMENT);

    });

    ROUNDFOOTER('','',(ELEMENT)=>{

        ICON(ELEMENT,WHITEAPPICON,(ELEMENTED)=>{

            CLICKED(ELEMENTED,()=>{
               
                NAVIGATOR('Yes',ANDROIDAPPPAGE,'ANDROIDHOMEPAGE');

            });

        });

        ICON(ELEMENT,WHITEGAMEICON,(ELEMENTED)=>{

            CLICKED(ELEMENTED,()=>{
               
                NAVIGATOR('Yes',ANDROIDGAMEPAGE,'ANDROIDHOMEPAGE');

            });

        });

        ICON(ELEMENT,WHITEUSERHOLDERICON,(ELEMENTED)=>{

            CLICKED(ELEMENTED,()=>{
               
                NAVIGATOR('Yes',ANDROIDUSERPAGE,'ANDROIDHOMEPAGE');

            });

        });

    });

};

const ANDROIDAPPPAGE=()=>{

    CLEAR("");

    FULLVIEW('','transparent',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

        HOMEAPPS(ELEMENT);

    });

    HEADER('','transparent',(ELEMENT)=>{

        ICON(ELEMENT,WHITEBACKICON,(ELEMENTED)=>{

            STYLED(ELEMENTED,'margin-left','1%');

            CLICKED(ELEMENTED,()=>{
               
                NAVIGATOR('Yes',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

            });

        });

        TEXT(ELEMENT,'','Apps',(ELEMENTEDS)=>{

            STYLED(ELEMENTEDS,'text-align','right');
            STYLED(ELEMENTEDS,'margin-right','5%');

        });

    });
};

const ANDROIDGAMEPAGE=()=>{

    CLEAR("");

    FULLVIEW('','transparent',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

        HOMEAPPS(ELEMENT);

    });

    HEADER('','transparent',(ELEMENT)=>{

        ICON(ELEMENT,WHITEBACKICON,(ELEMENTED)=>{

            STYLED(ELEMENTED,'margin-left','1%');

            CLICKED(ELEMENTED,()=>{
               
                NAVIGATOR('Yes',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

            });

        });

        TEXT(ELEMENT,'','Games',(ELEMENTEDS)=>{

            STYLED(ELEMENTEDS,'text-align','right');
            STYLED(ELEMENTEDS,'margin-right','5%');

        });

    });
};

const ANDROIDUSERPAGE=()=>{

    CLEAR("");

    FULLVIEW('','transparent',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

        VIEW(ELEMENT,(ELEMENTED)=>{

            STYLED(ELEMENTED,'display','inline-flex');

            ICON(ELEMENTED,WHITEUSERHOLDERICON,(ELEMENTEDS)=>{

                STYLED(ELEMENTEDS,'width','50%');
                STYLED(ELEMENTEDS,'height','70%');

            });

            CONDITION(localStorage.getItem("UserData"),()=>{

                BUTTON(ELEMENTED,'Sign In','','blue',()=>{

                },()=>{

                });

            },()=>{

                BUTTON(ELEMENTED,'Sign In','','green',(ELEMENTS)=>{

                    NAVIGATOR('Yes',SIGNACCOUNTPAGE,'ANDROIDUSERPAGE');
        
                },(ELEMENTS)=>{
                    STYLED(ELEMENTS,'width','30%');
                    STYLED(ELEMENTS,'position','absolute');
                    STYLED(ELEMENTS,'bottom','5%');
                    STYLED(ELEMENTS,'right','5px');
                    STYLED(ELEMENTS,'left','auto');
                    STYLED(ELEMENTS,'border-radius','10px');
                });
                
            });

        });

        BUTTON(ELEMENT,' ','','green',()=>{

        },(ELEMENTES)=>{

            STYLED(ELEMENTES,'display','inline-flex');

            TEXT(ELEMENTES,'','Settings',(ELEMENTEDS)=>{

                STYLED(ELEMENTEDS,'text-align','left');
                STYLED(ELEMENTEDS,'margin-left','1%');
                STYLED(ELEMENTEDS,'color','#ffffff');

            });

            ICON(ELEMENTES,WHITESETTINGSICON,(ELEMENTED)=>{
                STYLED(ELEMENTED,'margin-right','5%');
            });

        });

        BUTTON(ELEMENT,' ','','green',()=>{

            RELOAD();

        },(ELEMENTES)=>{

            STYLED(ELEMENTES,'display','inline-flex');

            TEXT(ELEMENTES,'','Sync',(ELEMENTEDS)=>{

                STYLED(ELEMENTEDS,'text-align','left');
                STYLED(ELEMENTEDS,'margin-left','1%');
                STYLED(ELEMENTEDS,'color','#ffffff');

            });

            ICON(ELEMENTES,WHITESYNICON,(ELEMENTED)=>{
                STYLED(ELEMENTED,'margin-right','5%');
            });

        });

        BUTTON(ELEMENT,' ','','green',()=>{

        },(ELEMENTES)=>{

            STYLED(ELEMENTES,'display','inline-flex');

            TEXT(ELEMENTES,'','Help',(ELEMENTEDS)=>{

                STYLED(ELEMENTEDS,'text-align','left');
                STYLED(ELEMENTEDS,'margin-left','1%');
                STYLED(ELEMENTEDS,'color','#ffffff');

            });

            ICON(ELEMENTES,WHITEHELPICON,(ELEMENTED)=>{
                STYLED(ELEMENTED,'margin-right','5%');
            });

        });

        BUTTON(ELEMENT,' ','','green',()=>{

        },(ELEMENTES)=>{

            STYLED(ELEMENTES,'display','inline-flex');

            TEXT(ELEMENTES,'','Contact Us',(ELEMENTEDS)=>{

                STYLED(ELEMENTEDS,'text-align','left');
                STYLED(ELEMENTEDS,'margin-left','1%');
                STYLED(ELEMENTEDS,'color','#ffffff');

            });

            ICON(ELEMENTES,WHITEPHONEICON,(ELEMENTED)=>{
                STYLED(ELEMENTED,'margin-right','5%');
            });

        });


    });

    HEADER('','transparent',(ELEMENT)=>{

        ICON(ELEMENT,WHITEBACKICON,(ELEMENTED)=>{

            STYLED(ELEMENTED,'margin-left','1%');

            CLICKED(ELEMENTED,()=>{
               
                NAVIGATOR('Yes',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

            });

        });

        TEXT(ELEMENT,'','My Profile',(ELEMENTEDS)=>{

            STYLED(ELEMENTEDS,'text-align','right');
            STYLED(ELEMENTEDS,'margin-right','5%');

        });

    });
};

const APPPAGE=()=>{

    DELETESTORE('','Paged');

    DEJSON(sessionStorage.getItem('AppDetails'),(Element)=>{

        CLEAR("");

        FULLVIEW('','transparent',(ELEMENT)=>{

            STYLED(ELEMENT,'top','50px');

            ICON(ELEMENT,Element.AppImage,(ELEMENTED)=>{
                STYLED(ELEMENTED,'width','50%');
                STYLED(ELEMENTED,'height','50%');
                STYLED(ELEMENTED,'border-radius','5%');
                STYLED(ELEMENTED,'margin-top','1%');
                STYLED(ELEMENTED,'margin-left','1%');

            });

            VIEW(ELEMENT,(ELEMENTED)=>{

                STYLED(ELEMENTED,'position','absolute');
                STYLED(ELEMENTED,'right','0');
                STYLED(ELEMENTED,'top','0%');
                STYLED(ELEMENTED,'left','auto');
                STYLED(ELEMENTED,'width','50%');
                STYLED(ELEMENTED,'height','50%');
                STYLED(ELEMENTED,'background','transparent');

                
                BUTTON(ELEMENTED,' ','','transparent',()=>{


                },(ELEMENTES)=>{

                    STYLED(ELEMENTES,'display','inline-flex');
                    STYLED(ELEMENTES,'width','95%');
                    STYLED(ELEMENTES,'margin-left','2.5%');
                    STYLED(ELEMENTES,'border-radius','20px');

                    ICON(ELEMENTES,WHITESTARICON,(ELEMENTED)=>{
                        STYLED(ELEMENTED,'margin-left','5%');
                    });

                    TEXT(ELEMENTES,'',Element.AppRatings,(ELEMENTEDS)=>{

                        STYLED(ELEMENTEDS,'text-align','left');
                        STYLED(ELEMENTEDS,'margin-right','1%');
                        STYLED(ELEMENTEDS,'color','#ffffff');

                    });

                });

                BUTTON(ELEMENTED,' ','','transparent',()=>{


                },(ELEMENTES)=>{

                    STYLED(ELEMENTES,'display','inline-flex');
                    STYLED(ELEMENTES,'width','95%');
                    STYLED(ELEMENTES,'margin-left','2.5%');
                    STYLED(ELEMENTES,'border-radius','20px');

                    ICON(ELEMENTES,WHITEGROUPICON,(ELEMENTED)=>{
                        STYLED(ELEMENTED,'margin-left','5%');
                    });

                    TEXT(ELEMENTES,'',Element.AppCatergory,(ELEMENTEDS)=>{

                        STYLED(ELEMENTEDS,'text-align','left');
                        STYLED(ELEMENTEDS,'margin-right','1%');
                        STYLED(ELEMENTEDS,'color','#ffffff');

                    });

                });

                BUTTON(ELEMENTED,' ','','transparent',()=>{

                },(ELEMENTES)=>{

                    STYLED(ELEMENTES,'display','inline-flex');
                    STYLED(ELEMENTES,'width','95%');
                    STYLED(ELEMENTES,'margin-left','2.5%');
                    STYLED(ELEMENTES,'border-radius','20px');

                    ICON(ELEMENTES,WHITEAPPICON,(ELEMENTED)=>{
                        STYLED(ELEMENTED,'margin-left','5%');
                    });

                    TEXT(ELEMENTES,'',Element.AppDetails,(ELEMENTEDS)=>{

                        STYLED(ELEMENTEDS,'text-align','left');
                        STYLED(ELEMENTEDS,'margin-right','1%');
                        STYLED(ELEMENTEDS,'color','#ffffff');

                    });

                });

                VIEW(ELEMENTED,(ELEMENTS)=>{

                    STYLED(ELEMENTS,'position','absolute');
                    STYLED(ELEMENTS,'bottom','0');
                    STYLED(ELEMENTS,'height','50px');
                    STYLED(ELEMENTS,'height','50px');
                    STYLED(ELEMENTS,'display','inline-flex');
                    STYLED(ELEMENTS,'background','transparent');

                    DEJSON(localStorage.getItem('LikedApps'),(LikedData)=>{

                        DATASORTER(LikedData,Element.ID,(ResBack)=>{

                            CONDITION(ResBack === true,()=>{
                                ICON(ELEMENTS,WHITEHEARTICON,(ELEMENTED)=>{
                                    CLICKED(ELEMENTED,()=>{
                                        JSONREMOVER(localStorage.getItem("LikedApps"),[Element.ID],(data)=>{
                                            STORE('local','LikedApps',data);
                                            APPPAGE();
                                        });
                                    })
                                });
                            },()=>{
                                ICON(ELEMENTS,WHITEUNHEARTICON,(ELEMENTED)=>{
                                    CLICKED(ELEMENTED,()=>{
            
                                        JSONADDER(localStorage.getItem("LikedApps"),[Element.ID],(data)=>{
                                            STORE('local','LikedApps',data);
                                            APPPAGE();
                                        });
                                    });
                                });
                            } );
                        });
                    });
                    
                    ICON(ELEMENTS,WHITECOMMENTICON,(ELEMENTED)=>{

                        CLICKED(ELEMENTED,()=>{

                            CONDITION(localStorage.getItem('UserData'),()=>{

                            },()=>{

                                STORE('','Paged','On');

                                NAVIGATOR('Yes',SIGNACCOUNTPAGE,'APPPAGE');

                            });

                        });
                        
                    });

                    ICON(ELEMENTS,WHITESHAREICON,(ELEMENTED)=>{

                        CLICKED(ELEMENTED,()=>{

                            CONDITION(localStorage.getItem('UserData'),()=>{

                            },()=>{

                                STORE('','Paged','On');

                                NAVIGATOR('Yes',SIGNACCOUNTPAGE,'APPPAGE');

                            });

                        });
                        
                    });

                });
                
            });

            BUTTON(ELEMENT,' ','','green',()=>{

                WEBSITE(DRIVEDIRECTLINK +Element.AppLink);

            },(ELEMENTES)=>{

                STYLED(ELEMENTES,'display','inline-flex');

                TEXT(ELEMENTES,'','Install',(ELEMENTEDS)=>{

                    STYLED(ELEMENTEDS,'text-align','left');
                    STYLED(ELEMENTEDS,'margin-left','1%');
                    STYLED(ELEMENTEDS,'color','#ffffff');

                });

                ICON(ELEMENTES,WHITEDOWNLOADICON,(ELEMENTED)=>{
                    STYLED(ELEMENTED,'margin-right','5%');
                });

            });

            TEXT(ELEMENT,'',Element.LongDescription||'None',(ELEMENTEDS)=>{

                STYLED(ELEMENTEDS,'text-align','left');
                STYLED(ELEMENTEDS,'margin-left','1%');
                STYLED(ELEMENTEDS,'color','#ffffff');

            });

        });

        HEADER('','transparent',(ELEMENT)=>{

            ICON(ELEMENT,WHITEBACKICON,(ELEMENTED)=>{

                STYLED(ELEMENTED,'margin-left','1%');

                CLICKED(ELEMENTED,()=>{
                
                    NAVIGATOR('',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

                });

            });

            TEXT(ELEMENT,'',Element.AppName,(ELEMENTEDS)=>{

                STYLED(ELEMENTEDS,'text-align','right');
                STYLED(ELEMENTEDS,'margin-right','5%');

            });

        });

    });

};

const SIGNACCOUNTPAGE=()=>{

    CLEAR("");

    FULLVIEW('','transparent',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

        BREAK(ELEMENT);BREAK(ELEMENT);

        TEXT(ELEMENT,'','Get Started Now to Access Your Account',(ELEMENTEDS)=>{

            STYLED(ELEMENTEDS,'text-align','center');

        });

        INPUT(ELEMENT,'email','Enter Your Email','',()=>{

        });

        BUTTON(ELEMENT,'Access Now','','green',()=>{

        },(ELEMENTES)=>{

        });

    });

    HEADER('','transparent',(ELEMENT)=>{

        ICON(ELEMENT,WHITEBACKICON,(ELEMENTED)=>{

            STYLED(ELEMENTED,'margin-left','1%');

            CLICKED(ELEMENTED,()=>{

                CONDITION(sessionStorage.getItem('Paged'),()=>{

                    NAVIGATOR('',APPPAGE,'APPPAGE');

                },()=>{

                    NAVIGATOR('',ANDROIDUSERPAGE,'ANDROIDUSERPAGE');

                });

            });

        });

        TEXT(ELEMENT,'','Account Access',(ELEMENTEDS)=>{

            STYLED(ELEMENTEDS,'text-align','right');
            STYLED(ELEMENTEDS,'margin-right','5%');

        });

    });

};