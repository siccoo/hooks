import React, { useRef } from 'react'

// useRef hook is for the manipulation of dom elements, just like is done on vanilla JS
// when you would like to manipulate DOM elements like document.getElementById or document.getElementByClass

const RefTut = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        console.log(inputRef.current.value);  
        // This consoles whatever current value changes that is been made on the input

        // console.log(inputRef.current.focus)
        inputRef.current.value = "";
    }

  return (
    <div>
        <h3>Chilaka</h3>
        <input type="text" placeholder="Buzz..." ref={inputRef} />
        <button onClick={handleClick}>Change Name</button>
    </div>
  )
}

export default RefTut