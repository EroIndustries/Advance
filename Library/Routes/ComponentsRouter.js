import { FLATFOOTER } from "../Components/Footer/FlatFooter.js";
import { FLATHEADER } from "../Components/Header/FlatHeader.js";
import { ICONED } from "../Components/Icon/FlatIcon.js";

const COMPONENTSROUTE=()=>{

const FUNCTIONS=`const FLATHEADER=${FLATHEADER.toString()};
const FLATFOOTER=${FLATFOOTER.toString()};   
const ICON=${ICONED.toString()};   
   
`;
localStorage.setItem("COMPONENTS",FUNCTIONS);

}

export{COMPONENTSROUTE}