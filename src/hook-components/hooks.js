import React from "react";
import { Outlet, Link } from "react-router-dom";

function Hooks() {
    return (
        <div>
           <ul className="nav nav-list">
               <li><Link to="./useState">Use state</Link></li>
               <li><Link to="./useReducer">Use Reducer</Link></li>
               <li><Link to="./useeffect">Use Effect</Link></li>
               <li><Link to="./useRef">Use Ref</Link></li>
               <li><Link to="./useLayoutEffect">Use Layout Effect</Link></li>
               <li><Link to="./useImparetiveHandleHook">Use Imparetive Handle Hook</Link></li>
               <li><Link to="./useContextHook">Use Context Hook</Link></li>
               <li><Link to="./useMemoTutorial">Use MemoTutorial</Link></li>
               <li><Link to="./useCallBackTutorial">Use CallBackTutorial</Link></li>
           </ul>
           <Outlet></Outlet>
        </div>
    )
}

export default Hooks;