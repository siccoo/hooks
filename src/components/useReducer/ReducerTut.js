import React, { useReducer } from 'react';

const reducer = () => {

}

const ReducerTut = () => {
    const [state, dispatch] = useReducer(reducer,{
        count:0,
        showText:true
    })
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1);
                setShowText(!showText);
            }}>
                Click me
            </button>

            {showText && <p>This is a text</p>}
        </div>
    )
}

export default ReducerTut