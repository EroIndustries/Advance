const GETDATA=(URL,NAME,callback)=>{
    const Data={
        "spreadsheetUrl":URL,
        "sheetName":NAME,
    };
    if (navigator.onLine) {
        fetch('https://script.google.com/macros/s/AKfycby5S_I3_hu6iEB0n8I7cmFZ9liA1kGPpQ-9ewmTcJmkUuMCYY540oaGDwJGE4ADs6tv5w/exec',{
            method:"POST",
            body:JSON.stringify(Data)
        })
        .then(res =>res.json())
        .then(data =>{
            callback(data);
        })
        .catch(error =>{console.log(error)});
    };
};
export{GETDATA};