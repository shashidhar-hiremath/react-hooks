import React, { useReducer } from "react";

function ReducerHook() {
    const reducer = (state, action) => {
        switch(action.type) {
            case 'INCREMENT': 
                return {count: state.count + 1, showText: state.showText};
            case 'TOGGLE': 
                return {count: state.count, showText: !state.showText};
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true});
    return (
        <div>
        <h3>
            Use Reducer hook
        </h3>
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => {
                dispatch({type: 'INCREMENT'});
                dispatch({type: 'TOGGLE'});
            }}>Click here</button>
            {state.showText && <h4>Showing text</h4>}
        </div>
    </div>
    )
}

export default ReducerHook;