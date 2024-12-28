const CONFIGURATION=()=>{
    const DATA={
        "spreadsheetUrl":"https://docs.google.com/spreadsheets/d/1kd15tCp1cX6TIUSsm3GcrfxDvOrmqlTNxAaseR8LBhw/edit?gid=0#gid=0",
        "sheetName":"AppManager"
    }

    if (localStorage.getItem("Environment") === 'Development') {
        if (!localStorage.getItem("Module")) {   
            localStorage.setItem('Module','True');   
            setTimeout(() => {
                if (localStorage.getItem("Environment") === 'Production') {        
                    Android.reloadPage();                               
                } else {                               
                    location.href='./index.html';      
                }            
            }, 2000);
            return;
        } 
    } else { 

        fetch('https://script.google.com/macros/s/AKfycby5S_I3_hu6iEB0n8I7cmFZ9liA1kGPpQ-9ewmTcJmkUuMCYY540oaGDwJGE4ADs6tv5w/exec',{
            method:"Post",
            body:JSON.stringify(DATA)
        })
        .then(res =>res.json())
        .then(data =>{
            data.forEach(element => {   
                if (element.ID === localStorage.getItem('NAME')) {
    
                    if (!localStorage.getItem("Module")) {  
                        
                        localStorage.setItem('Module','True');  
    
                        if (localStorage.getItem("Environment") === 'Production') {
    
                            const DATA=`${element.Functions}${element.FunctionsOne}${element.JsonOne}`;
                            localStorage.setItem('PROJECT',DATA);
                            localStorage.setItem('AppIcon',element.AppIcons);

                            setTimeout(() => {
                                if (localStorage.getItem('Environment')==='Production') {
                                    Android.reloadPage();
                                }else{
                                    location.href='./index.html';
                                };
                                
                            }, 2000);

                            return;
                            
                        } ;
    
                        console.log(element);

                        return;

                    };
                } ;
            });
        } )
        .catch(error =>{
            console.log(error);
        });

    };

};
export{CONFIGURATION};