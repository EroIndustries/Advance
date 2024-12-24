import { APIS } from "../Api/Api.js";
import { MODULE } from "../Module/Module.js";
import { ASSETSROUTE } from "./AssetsRoute.js";
import { COMPONENTSROUTE } from "./ComponentsRouter.js";
import { FUNCTIONSROUTE } from "./FunctionsRoute.js"
import { MODULED } from "./ModuleRoute.js";
const GENERALROUTE=()=>{

    APIS();

    MODULE();

    FUNCTIONSROUTE();

    COMPONENTSROUTE();

    ASSETSROUTE();

    MODULED();

};
export{GENERALROUTE};