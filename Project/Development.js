const ANDROIDHOMEPAGE=()=>{

    CHECKER(!localStorage.getItem('LikedApps'),()=>{

        JSONADDER([],['9e24b827-9556-4f8f-baf9-13690c819556'],(data)=>{

            STORE('local','LikedApps',data);

        });
       
    });

    CLEAR("");

    FULLVIEW('','transparent',(ELEMENT)=>{

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

    HIDER(100,()=>{
        STORE('','PreviousPage','ANDROIDHOMEPAGE');
    });

    CLEAR("");

    FULLVIEW('','transparent',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

        VIEW(ELEMENT,(ELEMENTED)=>{

            STYLED(ELEMENTED,'display','inline-flex');
            STYLED(ELEMENTED,'background','transparent');

            ICON(ELEMENTED,WHITEUSERHOLDERICON,(ELEMENTEDS)=>{

                STYLED(ELEMENTEDS,'width','50%');
                STYLED(ELEMENTEDS,'height','70%');

                CLICKED(ELEMENTEDS,()=>{
                    
                    IMAGEPICKER(ELEMENTEDS,(data)=>{
                        console.log(data)
                    })
                })

            });

            CONDITION(localStorage.getItem("UserData"),()=>{

                BUTTON(ELEMENTED,'My Account','','blue',(ELEMENT)=>{

                    NAVIGATOR('Yes',ANDROIDUSERACCOUNTPAGE,'ANDROIDUSERPAGE');
                                                        
                },(ELEMENTS)=>{

                    STYLED(ELEMENTS,'width','30%');
                    STYLED(ELEMENTS,'position','absolute');
                    STYLED(ELEMENTS,'bottom','5%');
                    STYLED(ELEMENTS,'right','5px');
                    STYLED(ELEMENTS,'left','auto');
                    STYLED(ELEMENTS,'border-radius','10px');

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

            NAVIGATOR('Yes',ANDROIDBUSINESSPAGE,'ANDROIDUSERPAGE');

        },(ELEMENTES)=>{

            STYLED(ELEMENTES,'display','inline-flex');

            TEXT(ELEMENTES,'','Business Tools',(ELEMENTEDS)=>{

                STYLED(ELEMENTEDS,'text-align','left');
                STYLED(ELEMENTEDS,'margin-left','1%');
                STYLED(ELEMENTEDS,'color','#ffffff');

            });

            ICON(ELEMENTES,WHITECREATEDONICON,(ELEMENTED)=>{
                STYLED(ELEMENTED,'margin-right','5%');
            });

        });

        BUTTON(ELEMENT,' ','','green',()=>{

            NAVIGATOR('Yes',ANDROIDSETTINGSPAGE,'ANDROIDUSERPAGE');

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

            NAVIGATOR('Yes',ANDROIDHELPPAGE,'ANDROIDUSERPAGE');

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

            NAVIGATOR('Yes',ANDROIDCONTACTUSPAGE,'ANDROIDUSERPAGE');

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

    HIDER(100,()=>{
        STORE('','PreviousPage','ANDROIDHOMEPAGE');
    });

    DELETESTORE('','Paged');

    DEJSON(sessionStorage.getItem('AppDetails'),(Element)=>{

        CLEAR("");

        FULLVIEW('','transparent',(ELEMENT)=>{

            STYLED(ELEMENT,'top','50px');

            ICON(ELEMENT,Element.AppImage,(ELEMENTED)=>{
                STYLED(ELEMENTED,'width','48%');
                STYLED(ELEMENTED,'height','30%');
                STYLED(ELEMENTED,'margin','auto');
                STYLED(ELEMENTED,'margin-left','0.5%');
                STYLED(ELEMENTED,'margin-right','0.5%');
                STYLED(ELEMENTED,'margin-top','3%');
            });

            VIEW(ELEMENT,(ELEMENTED)=>{

                STYLED(ELEMENTED,'position','absolute');
                STYLED(ELEMENTED,'right','0');
                STYLED(ELEMENTED,'top','0%');
                STYLED(ELEMENTED,'left','auto');
                STYLED(ELEMENTED,'width','50%');
                STYLED(ELEMENTED,'height','30%');
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

    DELETESTORE("",'UserEmail');

    CLEAR("");

    FULLVIEW('','transparent',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

        BREAK(ELEMENT);BREAK(ELEMENT);

        TEXT(ELEMENT,'','Get Started Now to Access Your Account',(ELEMENTEDS)=>{

            STYLED(ELEMENTEDS,'text-align','center');

        });

        INPUT(ELEMENT,'email','Enter Your Email','',(ELE)=>{

            STORE("",'UserEmail',ELE);

        });

        BUTTON(ELEMENT,'Access Now','','green',(ELEMENT)=>{

            const LINK='https://docs.google.com/spreadsheets/d/1kd15tCp1cX6TIUSsm3GcrfxDvOrmqlTNxAaseR8LBhw/edit?pli=1&gid=1692936594#gid=1692936594';

            CONDITION(sessionStorage.getItem('UserEmail'),()=>{

                CHECKER(navigator.onLine,()=>{

                    DISPLAY(ELEMENT,'Please Wait');

                    GETDATA(LINK,'StoreUsers',(data)=>{

                        FINDER(data,'UserEmail',sessionStorage.getItem('UserEmail'),(Mydata)=>{

                            CONDITION(Mydata ,()=>{

                                JSONIFICATION(Mydata,(SavedUser)=>{

                                    STORE('local','UserData',SavedUser);

                                    NAVIGATOR('Yes',ANDROIDUSERACCOUNTPAGE,'ANDROIDUSERPAGE');
                                    
                                });

                            },()=>{

                                DEVICE((de)=>{

                                    DATENOW((Now)=>{

                                        const DATA=[sessionStorage.getItem('UserEmail'),de,Now,'Active']
                                        const HEADERS=['UserEmail','Device','CreatedOn','Status'];
        
                                        INSERTDATA(LINK,'StoreUsers',HEADERS,DATA,()=>{
    
                                            GETDATA(LINK,'StoreUsers',(MyDatata)=>{
    
                                                FINDER(MyDatata,'UserEmail',sessionStorage.getItem('UserEmail'),(Mydata)=>{
    
                                                    CONDITION(Mydata ,()=>{
    
                                                        JSONIFICATION(Mydata,(SavedUser)=>{
    
                                                            STORE('local','UserData',SavedUser);
                        
                                                            NAVIGATOR('Yes',ANDROIDUSERACCOUNTPAGE,'ANDROIDUSERPAGE');
                                                            
                                                        });
    
                                                    },()=>{
    
                                                        alert("Failed to Link Device to Your Account");
    
                                                    });
    
                                                });
                                    
                                            });
    
                                            NAVIGATOR('Yes',ANDROIDUSERACCOUNTPAGE,'ANDROIDUSERPAGE');
        
                                        });
        
                                    });

                                });

                            });

                        });

                    });

                });

            },()=>{
                alert("Enter Your Email")
            })

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

const ANDROIDUSERACCOUNTPAGE=()=>{

    CLEAR("");

    FULLVIEW('','transparent',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

    
    });

    HEADER('','transparent',(ELEMENT)=>{

        ICON(ELEMENT,WHITEBACKICON,(ELEMENTED)=>{

            STYLED(ELEMENTED,'margin-left','1%');

            CLICKED(ELEMENTED,()=>{
               
                NAVIGATOR('Yes',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

            });

        });

        TEXT(ELEMENT,'','My Account Profile',(ELEMENTEDS)=>{

            STYLED(ELEMENTEDS,'text-align','right');
            STYLED(ELEMENTEDS,'margin-right','5%');

        });

    });
};

const ANDROIDSETTINGSPAGE=()=>{

    CLEAR("");

    FULLVIEW('','transparent',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

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

            WEBSITE(DRIVEDIRECTLINK+'1CLK0Xwq495wrNogzsIOw5qnLLi_JKk3F');

        },(ELEMENTES)=>{

            STYLED(ELEMENTES,'display','inline-flex');

            TEXT(ELEMENTES,'','Update App',(ELEMENTEDS)=>{

                STYLED(ELEMENTEDS,'text-align','left');
                STYLED(ELEMENTEDS,'margin-left','1%');
                STYLED(ELEMENTEDS,'color','#ffffff');

            });

            ICON(ELEMENTES,WHITEMOBILEDEVELOPMENTICON,(ELEMENTED)=>{
                STYLED(ELEMENTED,'margin-right','5%');
            });

        });

    });

    HEADER('','transparent',(ELEMENT)=>{

        ICON(ELEMENT,WHITEBACKICON,(ELEMENTED)=>{

            STYLED(ELEMENTED,'margin-left','1%');

            CLICKED(ELEMENTED,()=>{

                NAVIGATOR('',ANDROIDUSERPAGE,'ANDROIDUSERPAGE');

            });

        });

        TEXT(ELEMENT,'','Preferences',(ELEMENTEDS)=>{

            STYLED(ELEMENTEDS,'text-align','right');
            STYLED(ELEMENTEDS,'margin-right','5%');

        });

    });

};

const ANDROIDCONTACTUSPAGE=()=>{

    DELETESTORE("",'UserEmail');

    CLEAR("");

    FULLVIEW('','transparent',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

        TEXT(ELEMENT,'','Fill The Form Below',(ELEMENTEDS)=>{

            STYLED(ELEMENTEDS,'text-align','center');

        });

        INPUT(ELEMENT,'','Enter Your Name','',()=>{

        });

        INPUT(ELEMENT,'email','Enter Your Email','',()=>{
            
        });

        INPUT(ELEMENT,'','Enter Your Location','',()=>{
            
        });

        TEXTAREA(ELEMENT,'Leave Your Message','',()=>{

        });

        BUTTON(ELEMENT,'Send Message','','green',()=>{

        },(ELEMENTES)=>{

        });

    });

    HEADER('','transparent',(ELEMENT)=>{

        ICON(ELEMENT,WHITEBACKICON,(ELEMENTED)=>{

            STYLED(ELEMENTED,'margin-left','1%');

            CLICKED(ELEMENTED,()=>{

                NAVIGATOR('',ANDROIDUSERPAGE,'ANDROIDUSERPAGE');

            });

        });

        TEXT(ELEMENT,'','Reach us',(ELEMENTEDS)=>{

            STYLED(ELEMENTEDS,'text-align','right');
            STYLED(ELEMENTEDS,'margin-right','5%');

        });

    });

};

const ANDROIDHELPPAGE=()=>{

    HIDER(100,()=>{
        STORE('','PreviousPage','ANDROIDUSERPAGE');
    });

    DELETESTORE("",'UserEmail');

    CLEAR("");

    FULLVIEW('','transparent',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

        BUTTON(ELEMENT,' ','','green',()=>{

            NAVIGATOR('Yes',ANDROIDPOLICYPAGE,'ANDROIDHELPPAGE');

        },(ELEMENTES)=>{

            STYLED(ELEMENTES,'display','inline-flex');

            TEXT(ELEMENTES,'','Privacy Policy',(ELEMENTEDS)=>{

                STYLED(ELEMENTEDS,'text-align','left');
                STYLED(ELEMENTEDS,'margin-left','1%');
                STYLED(ELEMENTEDS,'color','#ffffff');

            });

            ICON(ELEMENTES,WHITEPRIVACYPOLICYICON,(ELEMENTED)=>{
                STYLED(ELEMENTED,'margin-right','5%');
            });

        });

        BUTTON(ELEMENT,' ','','green',()=>{

            NAVIGATOR('Yes',ANDROIDHELPERPAGE,'ANDROIDHELPPAGE');

        },(ELEMENTES)=>{

            STYLED(ELEMENTES,'display','inline-flex');

            TEXT(ELEMENTES,'','App Help',(ELEMENTEDS)=>{

                STYLED(ELEMENTEDS,'text-align','left');
                STYLED(ELEMENTEDS,'margin-left','1%');
                STYLED(ELEMENTEDS,'color','#ffffff');

            });

            ICON(ELEMENTES,WHITEHELPERICON,(ELEMENTED)=>{
                STYLED(ELEMENTED,'margin-right','5%');
            });

        });

        BUTTON(ELEMENT,' ','','green',()=>{

            NAVIGATOR('Yes',ANDROIDTERMPAGE,'ANDROIDHELPPAGE');

        },(ELEMENTES)=>{

            STYLED(ELEMENTES,'display','inline-flex');

            TEXT(ELEMENTES,'','Terms and Condtions',(ELEMENTEDS)=>{

                STYLED(ELEMENTEDS,'text-align','left');
                STYLED(ELEMENTEDS,'margin-left','1%');
                STYLED(ELEMENTEDS,'color','#ffffff');

            });

            ICON(ELEMENTES,WHITEAGREEMENTICON,(ELEMENTED)=>{
                STYLED(ELEMENTED,'margin-right','5%');
            });

        });

    });

    HEADER('','transparent',(ELEMENT)=>{

        ICON(ELEMENT,WHITEBACKICON,(ELEMENTED)=>{

            STYLED(ELEMENTED,'margin-left','1%');

            CLICKED(ELEMENTED,()=>{

                NAVIGATOR('',ANDROIDUSERPAGE,'ANDROIDUSERPAGE');

            });

        });

        TEXT(ELEMENT,'','Guide',(ELEMENTEDS)=>{

            STYLED(ELEMENTEDS,'text-align','right');
            STYLED(ELEMENTEDS,'margin-right','5%');

        });

    });

};

const ANDROIDPOLICYPAGE=()=>{

    CLEAR("");

    FULLVIEW('','transparent',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

    });

    HEADER('','transparent',(ELEMENT)=>{

        ICON(ELEMENT,WHITEBACKICON,(ELEMENTED)=>{

            STYLED(ELEMENTED,'margin-left','1%');

            CLICKED(ELEMENTED,()=>{
               
                NAVIGATOR('',ANDROIDHELPPAGE,'ANDROIDHELPPAGE');

            });

        });

        TEXT(ELEMENT,'','Policy',(ELEMENTEDS)=>{

            STYLED(ELEMENTEDS,'text-align','right');
            STYLED(ELEMENTEDS,'margin-right','5%');

        });

    });
};

const ANDROIDHELPERPAGE=()=>{

    CLEAR("");

    FULLVIEW('','transparent',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

    });

    HEADER('','transparent',(ELEMENT)=>{

        ICON(ELEMENT,WHITEBACKICON,(ELEMENTED)=>{

            STYLED(ELEMENTED,'margin-left','1%');

            CLICKED(ELEMENTED,()=>{
               
                NAVIGATOR('',ANDROIDHELPPAGE,'ANDROIDHELPPAGE');

            });

        });

        TEXT(ELEMENT,'','Help',(ELEMENTEDS)=>{

            STYLED(ELEMENTEDS,'text-align','right');
            STYLED(ELEMENTEDS,'margin-right','5%');

        });

    });
};

const ANDROIDTERMPAGE=()=>{

    CLEAR("");

    FULLVIEW('','transparent',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

    });

    HEADER('','transparent',(ELEMENT)=>{

        ICON(ELEMENT,WHITEBACKICON,(ELEMENTED)=>{

            STYLED(ELEMENTED,'margin-left','1%');

            CLICKED(ELEMENTED,()=>{
               
                NAVIGATOR('',ANDROIDHELPPAGE,'ANDROIDHELPPAGE');

            });

        });

        TEXT(ELEMENT,'','Terms And Conditions',(ELEMENTEDS)=>{

            STYLED(ELEMENTEDS,'text-align','right');
            STYLED(ELEMENTEDS,'margin-right','5%');

        });

    });
};

const ANDROIDBUSINESSPAGE=()=>{

    HIDER(100,()=>{
        STORE('','PreviousPage','ANDROIDUSERPAGE');
    });

    CLEAR("");

    FULLVIEW('','transparent',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

        BUTTON(ELEMENT,' ','','green',()=>{

            NAVIGATOR('Yes',ANDROIDDONATEPAGE,'ANDROIDBUSINESSPAGE');

        },(ELEMENTES)=>{

            STYLED(ELEMENTES,'display','inline-flex');

            TEXT(ELEMENTES,'','Donate',(ELEMENTEDS)=>{

                STYLED(ELEMENTEDS,'text-align','left');
                STYLED(ELEMENTEDS,'margin-left','1%');
                STYLED(ELEMENTEDS,'color','#ffffff');

            });

            ICON(ELEMENTES,WHITESECRETCODEICON,(ELEMENTED)=>{
                STYLED(ELEMENTED,'margin-right','5%');
            });

        });

    });

    HEADER('','transparent',(ELEMENT)=>{

        ICON(ELEMENT,WHITEBACKICON,(ELEMENTED)=>{

            STYLED(ELEMENTED,'margin-left','1%');

            CLICKED(ELEMENTED,()=>{
               
                NAVIGATOR('',ANDROIDUSERPAGE,'ANDROIDUSERPAGE');

            });

        });

        TEXT(ELEMENT,'','Business Tools',(ELEMENTEDS)=>{

            STYLED(ELEMENTEDS,'text-align','right');
            STYLED(ELEMENTEDS,'margin-right','5%');

        });

    });
};

const ANDROIDDONATEPAGE=()=>{

    HIDER(100,()=>{
        STORE('','PreviousPage','ANDROIDBUSINESSPAGE');
    });

    DELETESTORE("",'UserEmail');

    DELETESTORE("",'Amount');

    DELETESTORE("",'Link');

    CLEAR("");

    FULLVIEW('','transparent',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

        BREAK(ELEMENT);BREAK(ELEMENT);

        TEXT(ELEMENT,'','Support Us Today ',(ELEMENTEDS)=>{

            STYLED(ELEMENTEDS,'text-align','center');

        });

        INPUT(ELEMENT,'tel','Enter Your Amount In Dollars','',(ELE)=>{

            STORE("",'Amount',ELE);

        });

        INPUT(ELEMENT,'email','Enter Your Email','',(ELE)=>{

            STORE("",'UserEmail',ELE);

        });

        BUTTON(ELEMENT,'Support Now','','green',(ELEMENT)=>{

            CONDITION(sessionStorage.getItem('UserEmail'),()=>{

                CONDITION(sessionStorage.getItem('Amount'),()=>{

                    CHECKER(navigator.onLine,()=>{

                        DISPLAY(ELEMENT,'Please Wait');

                        TOKENIZATION(sessionStorage.getItem("UserEmail"), '','App Donation',sessionStorage.getItem('Amount'),'https://eroindustries.github.io/Advance/Start/Start.js', (data)=>{

                            HIDER(500,()=>{

                                STORE('','Link',data);

                                NAVIGATOR("Yes",ANDROIDPAYMENTPAGE,'ANDROIDDONATEPAGE');
       
                            });

                        });

                    });

                },()=>{

                    alert("Enter Your Amount");
                })

            },()=>{
                alert("Enter Your Email")
            })

        },(ELEMENTES)=>{

        });

    });

    HEADER('','transparent',(ELEMENT)=>{

        ICON(ELEMENT,WHITEBACKICON,(ELEMENTED)=>{

            STYLED(ELEMENTED,'margin-left','1%');

            CLICKED(ELEMENTED,()=>{

                NAVIGATOR('',ANDROIDBUSINESSPAGE,'ANDROIDBUSINESSPAGE');

            });

        });

        TEXT(ELEMENT,'','Account Access',(ELEMENTEDS)=>{

            STYLED(ELEMENTEDS,'text-align','right');
            STYLED(ELEMENTEDS,'margin-right','5%');

        });

    });

};

const ANDROIDPAYMENTPAGE=()=>{

    CLEAR("");

    IFRAME('',sessionStorage.getItem("Link"),'transparent',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');
        STYLED(ELEMENT,'bottom','0px');
        
    });

    HEADER('','transparent',(ELEMENT)=>{

        ICON(ELEMENT,WHITEBACKICON,(ELEMENTED)=>{

            STYLED(ELEMENTED,'margin-left','1%');

            CLICKED(ELEMENTED,()=>{
               
                NAVIGATOR('',ANDROIDDONATEPAGE,'ANDROIDDONATEPAGE');

            });

        });

        TEXT(ELEMENT,'','Pay',(ELEMENTEDS)=>{

            STYLED(ELEMENTEDS,'text-align','right');
            STYLED(ELEMENTEDS,'margin-right','5%');

        });

    });
};