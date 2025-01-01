import { APPICON } from "../Icons/White/AppIcon/AppIcon.js";
import { BACKICON } from "../Icons/White/BackIcon/BackIcon.js";
import { DOWNLOADICON } from "../Icons/White/DownloadIcon/DownloadIcon.js";
import { GAMEICON } from "../Icons/White/GameIcon/GameIcon.js";
import { GROUPICON } from "../Icons/White/GroupIcon/GroupIcon.js";
import { HELPICON } from "../Icons/White/HelpIcon/HelpIcon.js";
import { LIBRARYICON } from "../Icons/White/LibraryIcon/LibraryIcon.js";
import { LISTICON } from "../Icons/White/ListIcon/ListIcon.js";
import { MOVIESICON } from "../Icons/White/MovieIcon/MovieIcon.js";
import { PHONEICON } from "../Icons/White/PhoneIcon/PhoneIcon.js";
import { SETTINGSICON } from "../Icons/White/SettingIcon/SettingIcon.js";
import { STARICON } from "../Icons/White/StarIcon/StarIcon.js";
import { SYNICON } from "../Icons/White/SyncIcon/SyncIcon.js";
import { USERHOLDERICON } from "../Icons/White/UserHolderIcon/UserHolderIcon.js";
import { USERICON } from "../Icons/White/UserIcon/UserIcon.js";

const WHITEICONSROUTES=()=>{
const DATA=`const WHITEAPPICON='${APPICON}';
const WHITEUSERICON='${USERICON}';
const WHITEUSERHOLDERICON='${USERHOLDERICON}';
const WHITELIBRARYICON='${LIBRARYICON}';
const WHITELISTICON='${LISTICON}';
const WHITEMOVIESICON='${MOVIESICON}';
const WHITEGAMEICON='${GAMEICON}';
const WHITESTARICON='${STARICON}';
const WHITEBACKICON='${BACKICON}';
const WHITESETTINGSICON='${SETTINGSICON}';
const WHITEPHONEICON='${PHONEICON}';
const WHITEHELPICON='${HELPICON}';
const WHITESYNICON='${SYNICON}';
const WHITEDOWNLOADICON='${DOWNLOADICON}';
const WHITEGROUPICON='${GROUPICON}';
`;
localStorage.setItem("WHITEICONS",DATA);
};
export{WHITEICONSROUTES};
`
const WHITEGROUPICON='${GROUPICON}';
`
