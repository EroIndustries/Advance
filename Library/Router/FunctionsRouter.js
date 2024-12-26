import { ADD } from "../Functions/Add/Add.js"
import { DISPLAY } from "../Functions/Display/Display.js";
const FUNCTIONROUTES=()=>{
const DATA=`const ADD=${ADD};
const DISPLAY=${DISPLAY};
`;
localStorage.setItem("FUNCTIONS",DATA);
};
export{FUNCTIONROUTES};