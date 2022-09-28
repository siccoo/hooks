import React, { useLayoutEffect, useEffect, useRef } from 'react'

// useLayoutEffect hook is a function that's called before the page renders while useEffect hook is a function that's called after the page re-renders

const LayoutEffectTut = () => {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, [])

    useEffect(() => {
        inputRef.current.value = "Tovia"
    }, [])

    return (
        <div>
            <input type="text" ref={inputRef} value="Chilaka" style={{ marginTop: 30, width: 200 }} />
        </div>
    )
}

export default LayoutEffectTut