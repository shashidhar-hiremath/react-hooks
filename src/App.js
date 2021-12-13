import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";

import Hooks from "./hook-components/hooks";
import UseStateHook from "./hook-components/use-state";
import ReducerHook from "./hook-components/useReducer";
import EffectHook from "./hook-components/effect-hook";
import UseRefHook from "./hook-components/ref-hook";
import UseLayoutEffectHook from "./hook-components/layout-effect-hook";
import ImparetiveHandleHook from "./hook-components/use-imperative-handle-hook";
import ContextHook from "./hook-components/context-hook";
import MemoTutorial from "./hook-components/memo-hook";
import CallBackTutorial from "./hook-components/callback-hook";
import VideoPlayerContainer from "./hook-components/video-container";

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hooks />}>
            <Route path="/useState" element={<UseStateHook />} />
            <Route path="/useReducer" element={<ReducerHook />} />
            <Route path="/useEffect" element={<EffectHook />} />
            <Route path="/useRef" element={<UseRefHook />} />
            <Route path="/useLayoutEffect" element={<UseLayoutEffectHook />} />
            <Route path="/useImparetiveHandleHook" element={<ImparetiveHandleHook />} />
            <Route path="/useContextHook" element={<ContextHook />} />
            <Route path="/useMemoTutorial" element={<MemoTutorial />} />
            <Route path="/useCallBackTutorial" element={<CallBackTutorial />} />
            <Route path="/vpc" element={<VideoPlayerContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Outlet></Outlet>
    </div>
  );
}

export default App;
