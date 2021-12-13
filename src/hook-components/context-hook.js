import React, { createContext, useState, useContext } from "react";

export const AppContext = createContext(null);

export const EnterName = () => {
    const {setName} = useContext(AppContext);
    return (
        <div>
            <input onChange={(event) => {
                setName(event.target.value);
            }}/>
        </div>
    )
}

export const DisplayName = () => {
    const {name} = useContext(AppContext);

    return (
        <h1>{name}</h1>
    )
}


function ContextHook() {
    const [name, setName] = useState('This is default name...');
    
    return (<>
    <h3>
                Use Context hook
            </h3>
    <AppContext.Provider value={{name, setName}}>
        <DisplayName />
        <EnterName />
    </AppContext.Provider>    
    </>);
}

export default ContextHook;