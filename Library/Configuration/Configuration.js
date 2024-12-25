const APPCONFIGURATION=()=>{
    const DATA={
        "spreadsheetUrl":"https://docs.google.com/spreadsheets/d/1kd15tCp1cX6TIUSsm3GcrfxDvOrmqlTNxAaseR8LBhw/edit?gid=0#gid=0",
        "sheetName":"AppManager"
    };
    fetch('https://script.google.com/macros/s/AKfycby5S_I3_hu6iEB0n8I7cmFZ9liA1kGPpQ-9ewmTcJmkUuMCYY540oaGDwJGE4ADs6tv5w/exec',{
        method:"POST",
        body:JSON.stringify(DATA)
    })
    .then(res => res.json())
    .then(data =>{
        data.forEach(element => {
            if (element.ID === localStorage.getItem('NAME') && !element.AppCredits) {
                console.log(element);
                if (!localStorage.getItem("Module")) {
                    localStorage.setItem('Module','True'); 
                    location.href='./index.html'; 
                }; 
            };
        });
    })
    .catch(error =>{
        console.log(error);
    });
};
export{APPCONFIGURATION};