import { CONNECTION } from "../Connection/Connection.js"
import { APPCONFIGURATION } from "../Library/Configuration/Configuration.js";
const APPLOAD=()=>{
    APPCONFIGURATION();
    CONNECTION();
}
export{APPLOAD}