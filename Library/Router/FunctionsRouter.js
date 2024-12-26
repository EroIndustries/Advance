import { ADD } from "../Functions/Add/Add.js"
import { APPCOLOR } from "../Functions/AppColor/AppColor.js";
import { CLEAR } from "../Functions/Clear/Clear.js";
import { DISPLAY } from "../Functions/Display/Display.js";
import { STORE } from "../Functions/Store/Store.js";
import { MODULEUPDATER } from "../Module/ModuleUpdater/ModuleUpdater.js";
const FUNCTIONROUTES=()=>{
const DATA=`const ADD=${ADD};
const DISPLAY=${DISPLAY};
const APPCOLOR=${APPCOLOR};
const MODULEUPDATER=${MODULEUPDATER};
const CLEAR=${CLEAR};
const STORE=${STORE};
`;
localStorage.setItem("FUNCTIONS",DATA);
};
export{FUNCTIONROUTES};

`
const STORE=${STORE};
`

