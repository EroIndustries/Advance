import { ADD } from "../Functions/Add/Add.js"
import { APPCOLOR } from "../Functions/AppColor/AppColor.js";
import { APPTEXTCOLOR } from "../Functions/AppTextColor/AppTextColor.js";
import { BODY } from "../Functions/Body/Body.js";
import { CLASS } from "../Functions/Class/Class.js";
import { CLEAR } from "../Functions/Clear/Clear.js";
import { DELETESTORE } from "../Functions/DeleteStorage/DeleteStorage.js";
import { DEVICE } from "../Functions/Device/Device.js";
import { DISPLAY } from "../Functions/Display/Display.js";
import { INSPECTION } from "../Functions/Inspection/Inspection.js";
import { NAVIGATOR } from "../Functions/Navigator/Navigator.js";
import { REDUX } from "../Functions/Redux/Redux.js";
import { ROUTEJS } from "../Functions/RouteJs/RouteJs.js";
import { STORE } from "../Functions/Store/Store.js";
import { STYLED } from "../Functions/Style/Style.js";
import { TIMENOW } from "../Functions/TimeNow/TimeNow.js";
import { WEBSITE } from "../Functions/WebSite/WebSite.js";
import { ZOOM } from "../Functions/Zoom/Zoom.js";
import { MODULEUPDATER } from "../Module/ModuleUpdater/ModuleUpdater.js";
const FUNCTIONROUTES=()=>{
const DATA=`const ADD=${ADD};
const DISPLAY=${DISPLAY};
const APPCOLOR=${APPCOLOR};
const MODULEUPDATER=${MODULEUPDATER};
const CLEAR=${CLEAR};
const STORE=${STORE};
const ROUTERJS=${ROUTEJS};
const INSPECTION=${INSPECTION};
const NAVIGATOR=${NAVIGATOR};
const REDUX=${REDUX};
const DELETESTORE=${DELETESTORE};
const ZOOM=${ZOOM};
const STYLED=${STYLED};
const WEBSITE=${WEBSITE};
const TIMENOW=${TIMENOW};
const DEVICE=${DEVICE};
const BODY=${BODY};
const APPTEXTCOLOR=${APPTEXTCOLOR};
const CLASS=${CLASS};
`;
localStorage.setItem("FUNCTIONS",DATA);
};
export{FUNCTIONROUTES};

`
const CLASS=${CLASS};
`

