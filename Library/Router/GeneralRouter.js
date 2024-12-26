import { FUNCTIONROUTES } from "./FunctionsRouter.js";
import { MODULEROUTER } from "./ModuleRouter.js";
const GENERALROUTER=()=>{
    FUNCTIONROUTES();
    MODULEROUTER();
};
export{GENERALROUTER};