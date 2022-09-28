import React, {useRef} from 'react';
import Button from './Button';

// useImperative Handle hooks allows us to define functions based on the ref that can be called by using that ref

const ImperativeHandle = () => {
    const buttonRef = useRef(null);

  return (
    <div style={{marginTop: 30}}>
        <button 
        onClick={() => {
            buttonRef.current.alterToggle();
        }}>
            Button from Parent
        </button>
        <Button ref={buttonRef} />
    </div>
  )
}

export default ImperativeHandle