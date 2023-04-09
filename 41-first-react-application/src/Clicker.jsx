import { useState, useEffect } from "react"

export default function Clicker({ increment, keyName, color = ' darkOrchid ' }) {

    const [count, updateCount] = useState(parseInt(localStorage.getItem(keyName) ?? 0)) // nullish coalescing operator
    // Go check mouse events in the react's documentation

    useEffect(() => {
      return () => 
       {
            localStorage.removeItem(keyName)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem(keyName, count)
    }, [ count ])
    const buttonClick = () => 
    {
       updateCount(count => count + 1)
       increment()
    }
    
    return (
    <>
       <h2> Clicker </h2>
       <h3 style={{ color }}> Clicks count: {count} </h3>
       <button onClick={buttonClick}>Click me </button>
    </>)
}