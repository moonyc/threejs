import { useState } from "react"
import Clicker from "./Clicker"

export default function App({ clickersCount, children }) 
{
    // Hot Module Replacement : only the parts that have changed are reinitiated
    
    const [hasClicker, setHasClicker] = useState(true)

    const [count, updateCount] = useState(0) // nullish coalescing operator

    const toggleClickerClick = () => {
        setHasClicker(!hasClicker)
    }
   
    const increment = () => 
    {
        updateCount(count + 1)
    }

    return (
        <>
        {children}
        <h2> Total count : {count}</h2>
        <button onClick={toggleClickerClick}> { hasClicker ? 'Hide' : 'Show'} Clicker </button>
        { hasClicker && <> 
        {[...Array(clickersCount).map(() => {
            return <Clicker increment={increment} keyName="countA" color={`hsl(${Math.random() * 360}, 100%, 70%)`} />
        })]}
        
       
        </> }
        </>
    )
}