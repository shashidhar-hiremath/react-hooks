import React, { useEffect, useState } from 'react';
import axio from 'axios';

function EffectHook() {
    const [inputValue, setInputValue] = useState(1);
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        if(inputValue % 2 === 0) {
            axio.get('https://jsonplaceholder.typicode.com/posts/1/comments').then(data => {
                console.log('--->', data);
                setApiData(data.data);
               });
        } else {
            setApiData([]);
        }
       
    }, [inputValue]);

    return (
        <div>
            <h3>
                Use Effect hook
            </h3>
            <p>UseEffect execute mostly after dom is rendred</p>
            <div>
                <button onClick={() => setInputValue(inputValue + 1)}>Click</button>
                {apiData && apiData?.map(x => (
                    <p key={x.id}>{x.email}</p>
                ))}
            </div>
        </div>
    )

} 

export default EffectHook;
