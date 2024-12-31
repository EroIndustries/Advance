const UPDATEDATA=(URL,NAME,ID,DATA,callback)=>{
    const Data={
        action:"update",
        "spreadsheetUrl":URL,
        "sheetName":NAME,
        "id":ID,
        "data":DATA
    };
    if (navigator.onLine) {
        fetch('https://script.google.com/macros/s/AKfycbzbmRB2zfDyMcde9mSmgC8u6U6a805g-LWGj9zRf7CZwrGp8eWwOPZanZ4htoNjEStGlQ/exec',{
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
export{UPDATEDATA};