const ADVANCE=()=>{
const DATA=`ROUTEJS(localStorage.getItem("FUNCTIONS"));
ROUTEJS(localStorage.getItem("COMPONENTS"));
ROUTEJS(localStorage.getItem("MODULE"));
ROUTEJS(localStorage.getItem("WHITEICONS"));
ROUTEJS(localStorage.getItem("PROJECT"));
`;
localStorage.setItem('ADVANCE',DATA);
};
export{ADVANCE};