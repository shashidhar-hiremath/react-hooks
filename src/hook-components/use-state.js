import React, { useState } from "react";

function UseStateHook() {
    const [inputValue, setInputValue] = useState("");
    const updateValue = (event) => {
        setInputValue(event.target.value);
    };
    return (
        <div>
            <h3>
                Use State hook
            </h3>
            <div>
                <input placeholder="enter here" onChange={updateValue}/>
                { inputValue }
            </div>
        </div>
    );
}

export default UseStateHook;