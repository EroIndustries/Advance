import { ASSETSROUTER } from "./AssetsRouter.js";
import { COMPONENTSROUTERS } from "./ComponentsRouter.js";
import { CONSTANTSROUTER } from "./ConstantsRouter.js";
import { FUNCTIONROUTES } from "./FunctionsRouter.js";
import { MODULEROUTER } from "./ModuleRouter.js";
const GENERALROUTER=()=>{
    FUNCTIONROUTES();
    MODULEROUTER();
    COMPONENTSROUTERS();
    ASSETSROUTER();
    CONSTANTSROUTER();
};
export{GENERALROUTER};