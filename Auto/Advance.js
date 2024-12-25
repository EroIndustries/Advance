const ADVANCE=()=>{
const DATA=`ROUTEJS(localStorage.getItem('FUNCTIONS'));
ROUTEJS(localStorage.getItem('COMPONENTS'));
ROUTEJS(localStorage.getItem('ICONS'));
ROUTEJS(localStorage.getItem('MODULE'));
ROUTEJS(localStorage.getItem('APIS'));
ROUTEJS(localStorage.getItem('PAGES'));
`;
localStorage.setItem('ADVANCE',DATA);
};
export {ADVANCE};