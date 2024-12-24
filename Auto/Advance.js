const ADVANCE=()=>{
const DATA=`ROUTEJS(localStorage.getItem('FUNCTIONS'));
ROUTEJS(localStorage.getItem('COMPONENTS'));
ROUTEJS(localStorage.getItem('ICONS'));
ROUTEJS(localStorage.getItem('MODULE'));
ROUTEJS(localStorage.getItem('APIS'));
`;
localStorage.setItem('ADVANCE',DATA);
localStorage.setItem('Module','True');  
};
export {ADVANCE};