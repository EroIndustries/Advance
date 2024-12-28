import { ICON } from "../Components/Icon/Icon.js";
import { IMAGE } from "../Components/Image/Image.js";
import { INPUT } from "../Components/Input/Input.js";
import { TEXTAREA } from "../Components/TextArea/TextArea.js";
const COMPONENTSROUTERS=()=>{
const DATA=`const INPUT=${INPUT};
const TEXTAREA=${TEXTAREA};
const ICON=${ICON};
const IMAGE=${IMAGE};
`;
localStorage.setItem("COMPONENTS",DATA);
};
export{COMPONENTSROUTERS};
`
const IMAGE=${IMAGE};
`