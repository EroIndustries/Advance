import { APPICON } from "../Icons/White/AppIcon/AppIcon.js";
import { BACKICON } from "../Icons/White/BackIcon/BackIcon.js";
import { GAMEICON } from "../Icons/White/GameIcon/GameIcon.js";
import { LIBRARYICON } from "../Icons/White/LibraryIcon/LibraryIcon.js";
import { LISTICON } from "../Icons/White/ListIcon/ListIcon.js";
import { MOVIESICON } from "../Icons/White/MovieIcon/MovieIcon.js";
import { STARICON } from "../Icons/White/StarIcon/StarIcon.js";
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
`;
localStorage.setItem("WHITEICONS",DATA);
};
export{WHITEICONSROUTES};
`
const WHITEBACKICON='${BACKICON}';
`
