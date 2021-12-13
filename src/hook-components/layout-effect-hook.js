import React, { useEffect, useRef, useLayoutEffect } from "react";

function UseLayoutEffectHook() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.value = 'Hello';
    }, []);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);
  
    return (
        <div>
            <h3>
                Use Layout effect hook
            </h3>
            <p>useLayoutEffect is executed before useEffect</p>
            <div>
                <input placeholder="enter here" value="kobra" ref={inputRef}/>
            </div>
        </div>
    );
}

export default UseLayoutEffectHook;