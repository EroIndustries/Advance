import { APPICON } from "../Icons/White/AppIcon/AppIcon.js";
import { GAMEICON } from "../Icons/White/GameIcon/GameIcon.js";
import { LIBRARYICON } from "../Icons/White/LibraryIcon/LibraryIcon.js";
import { LISTICON } from "../Icons/White/ListIcon/ListIcon.js";
import { MOVIESICON } from "../Icons/White/MovieIcon/MovieIcon.js";
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
`;
localStorage.setItem("WHITEICONS",DATA);
};
export{WHITEICONSROUTES};
`
const WHITEGAMEICON='${GAMEICON}';
`
