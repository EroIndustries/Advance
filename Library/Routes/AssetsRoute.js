import { APPICON } from "../Assets/Icons/White/App/AppIcon.js";
import { BACKICON } from "../Assets/Icons/White/Back/BackIcon.js";
import { BAGICON } from "../Assets/Icons/White/Bag/BagIcon.js";
import { BICYCLEICON } from "../Assets/Icons/White/Bicycle/BicycleIcon.js";
import { BOTTOMICON } from "../Assets/Icons/White/Bottom/BottomIcon.js";
import { CAKEICON } from "../Assets/Icons/White/Cake/CakeIcon.js";
import { CAMERAICON } from "../Assets/Icons/White/Camera/CameraIcon.js";
const ASSETSROUTE=()=>{
const FUNCTIONS=`const WHITEAPPICON='${APPICON}';
const WHITEBACKICON='${BACKICON}';
const WHITEBAGICON='${BAGICON}';
const WHITEBICYCLEICON='${BICYCLEICON}';
const WHITEBOTTOMICON='${BOTTOMICON}';
const WHITECAKEICON='${CAKEICON}';
const WHITECAMERAICON='${CAMERAICON}';
`;
localStorage.setItem("ICONS",FUNCTIONS);
};
export{ASSETSROUTE};