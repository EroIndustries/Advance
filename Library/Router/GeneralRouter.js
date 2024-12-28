import { COMPONENTSROUTERS } from "./ComponentsRouter.js";
import { FUNCTIONROUTES } from "./FunctionsRouter.js";
import { MODULEROUTER } from "./ModuleRouter.js";
const GENERALROUTER=()=>{
    FUNCTIONROUTES();
    MODULEROUTER();
    COMPONENTSROUTERS();
};
export{GENERALROUTER};