import { useRef, useState, useEffect } from "react"

export default function Clicker({ increment, keyName, color = ' darkOrchid ' }) {

    const [count, setCount] = useState(parseInt(localStorage.getItem(keyName) ?? 0)) // nullish coalescing operator
    // Go check mouse events in the react's documentation

    const buttonRef = useRef()
    
    useEffect(() => {
      buttonRef.current.style.backgroundColor = "papayawhip"
      buttonRef.current.style.color = "salmon"
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
       setCount(count + 1)
       increment()
    }
    
    return (
    <>
       <h2> Clicker </h2>
       <h3 style={{ color }}> Clicks count: {count} </h3>
       <button ref={buttonRef} onClick={buttonClick}>Click me </button>
    </>)
}