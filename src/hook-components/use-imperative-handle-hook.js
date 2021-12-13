import React, { useState, forwardRef, useImperativeHandle, useRef } from "react";


export const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);
    useImperativeHandle(ref,() =>({
        toggleState() {
            setToggle(!toggle);
        }
    }));

    return (
        <>
            <button>Button from child</button>
            {toggle && <span>Toggle</span>}
        </>
    );
});

function ImparetiveHandleHook() {

    const btnRef = useRef(null);

    return (
        <div>
            <button onClick={ () => {
                btnRef.current.toggleState();
            }}> Button from Parent </button>
            <Button ref={btnRef}/>
        </div>
    )

}

export default ImparetiveHandleHook;