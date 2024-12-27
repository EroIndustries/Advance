const DEJSON=(DATA,callback)=>{
    const MYDATA=JSON.parse(DATA);
    callback(MYDATA);
};
export{DEJSON};