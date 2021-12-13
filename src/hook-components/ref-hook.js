import React, { useState, useRef } from "react";

function UseRefHook() {
    const inputRef = useRef(null);
    const [data, setData] = useState('');
    const updateValue = () => {
        console.log(inputRef);
        inputRef.current.focus();
        setData(inputRef.current.value);
    };
    return (
        <div>
            <h3>
                Use Ref hook
            </h3>
            <div>
                <input placeholder="enter here" ref={inputRef}/>
                <button onClick={updateValue}>Click here</button>
                {data}
            </div>
        </div>
    );
}

export default UseRefHook;