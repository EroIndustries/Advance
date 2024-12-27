const JSONIFICATION=(DATA,callback)=>{
    const MYDATA=JSON.stringify(DATA);
    callback(MYDATA);
};
export{JSONIFICATION};