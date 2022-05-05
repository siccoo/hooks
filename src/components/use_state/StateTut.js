import React, { useState } from 'react'

const StateTut = () => {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState("")

    const add = () => {
        setCounter(counter + 1);
    }

    const handleChange = (e) => {
        const newValue = e.target.value
        setInputValue(newValue)
    }
    return (
        <div>
            {counter}
            <input placeholder='Write something...' onChange={handleChange} />
            <div>{inputValue}</div>
            <button onClick={() => add()}>Increment</button>
        </div>
    )
}

export default StateTut