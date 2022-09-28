import React, { useEffect, useState } from 'react';
import axios from 'axios';

// useEffect hook is a function that's called after the page re-renders

const EffectTut = () => {
const [data, setData] = useState("");
const [count, setCount] = useState(0)


  // useEffect(() => {
  //   const apiHub = "https://jsonplaceholder.typicode.com/comments";
  //   fetch(apiHub)
  //     .then((response) => {
  //       console.log(response.data)
  //     })
  // })

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email)
        console.log("Api was called")
      })
  }, [])

  return (
    <div>Hello 
      <p>{data}</p> 
    <p>{count}</p>
    <button onClick={() => {
      setCount(count + 1)
    }}>Click me</button>
    </div>
  )
}

export default EffectTut