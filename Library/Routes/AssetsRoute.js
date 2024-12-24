import { APPICON } from "../Assets/Icons/White/App/AndroidApp.js";
import { BACKICON } from "../Assets/Icons/White/Back/BackIcon.js";

const ASSETSROUTE=()=>{

const FUNCTIONS=`const WHITEAPPICON='${APPICON}';
const WHITEBACKICON='${BACKICON}';
`;
localStorage.setItem("ICONS",FUNCTIONS);

};

export{ASSETSROUTE}