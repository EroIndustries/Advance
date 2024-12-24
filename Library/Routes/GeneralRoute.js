import { MODULE } from "../Module/Module.js";
import { ASSETSROUTE } from "./AssetsRoute.js";
import { COMPONENTSROUTE } from "./ComponentsRouter.js";
import { FUNCTIONSROUTE } from "./FunctionsRoute.js"

const GENERALROUTE=()=>{

    MODULE();

    FUNCTIONSROUTE();

    COMPONENTSROUTE();

    ASSETSROUTE();

};

export{GENERALROUTE};