import { BUTTON } from "../Components/Button/Button.js";
import { COLORROUNDINPUT } from "../Components/ColoredRoundInput/ColoredRoundInput.js";
import { FOOTER } from "../Components/Footer/Footer.js";
import { FULLVIEW } from "../Components/FullView/FullView.js";
import { HEADER } from "../Components/Header/Header.js";
import { ICON } from "../Components/Icon/Icon.js";
import { IFRAME } from "../Components/Iframe/Iframe.js";
import { IMAGE } from "../Components/Image/Image.js";
import { INPUT } from "../Components/Input/Input.js";
import { ROUNDFOOTER } from "../Components/RoundFooter/RoundFooter.js";
import { ROUNDINPUT } from "../Components/RoundInput/RoundInput.js";
import { TEXT } from "../Components/Text/Text.js";
import { TEXTAREA } from "../Components/TextArea/TextArea.js";
import { VIEW } from "../Components/View/View.js";
const COMPONENTSROUTERS=()=>{
const DATA=`const INPUT=${INPUT};
const TEXTAREA=${TEXTAREA};
const ICON=${ICON};
const IMAGE=${IMAGE};
const BUTTON=${BUTTON};
const VIEW=${VIEW};
const FULLVIEW=${FULLVIEW};
const FOOTER=${FOOTER};
const ROUNDFOOTER=${ROUNDFOOTER};
const HEADER=${HEADER};
const TEXT=${TEXT};
const IFRAME=${IFRAME};
const ROUNDINPUT=${ROUNDINPUT};
const COLORROUNDINPUT=${COLORROUNDINPUT};
`;
localStorage.setItem("COMPONENTS",DATA);
};
export{COMPONENTSROUTERS};
`
const COLORROUNDINPUT=${COLORROUNDINPUT};
`