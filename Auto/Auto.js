const ADVANCE=()=>{
const DATA=`ROUTEJS(localStorage.getItem("FUNCTIONS"));
ROUTEJS(localStorage.getItem("COMPONENTS"));
ROUTEJS(localStorage.getItem("MODULE"));
ROUTEJS(localStorage.getItem("WHITEICONS"));
`;
localStorage.setItem('ADVANCE',DATA);
localStorage.setItem('Module','True');
};
export{ADVANCE};