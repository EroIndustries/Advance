import { BUTTON } from "../Components/Button/Button.js";
import { ICON } from "../Components/Icon/Icon.js";
import { IMAGE } from "../Components/Image/Image.js";
import { INPUT } from "../Components/Input/Input.js";
import { TEXTAREA } from "../Components/TextArea/TextArea.js";
const COMPONENTSROUTERS=()=>{
const DATA=`const INPUT=${INPUT};
const TEXTAREA=${TEXTAREA};
const ICON=${ICON};
const IMAGE=${IMAGE};
const BUTTON=${BUTTON};
`;
localStorage.setItem("COMPONENTS",DATA);
};
export{COMPONENTSROUTERS};
`
const BUTTON=${BUTTON};
`