import { LOGINPAGE } from "../Pages/LoginPage/LoginPage.js";
const PAGESROUTES=()=>{
const PAGES=`const LOGINPAGE=${LOGINPAGE};
`;
localStorage.setItem("PAGES",PAGES);
};
export{PAGESROUTES};