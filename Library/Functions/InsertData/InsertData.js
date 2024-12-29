const INSERTDATA=(URL,NAME,HEADERS,DATA,callback)=>{
    const Data={
        "spreadsheetUrl":URL,
        "sheetName":NAME,
        "Headers":HEADERS,
        "Data":DATA
    };
    if (navigator.onLine) {

        fetch('https://script.google.com/macros/s/AKfycbyfMnGzbYAbyK5TzUZ2Og9IH8QDlG81yUydnWQ5fCLzJYHj9Y36KvpaeYZoLYjQ5iDsUQ/exec',{
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
export{INSERTDATA}