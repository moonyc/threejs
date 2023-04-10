import { useState, useMemo } from "react"
import Clicker from "./Clicker"
import People from "./People"


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
    
   

    // we send a function and a dependencies array to useMemo
    const colors = useMemo(() => {
         const colors = []

        for(let i = 0; i < clickersCount; i++) {
        colors.push(`hsl(${Math.random() * 360}, 100%, 70%)`)
         }

         return colors
    }, [clickersCount])
    
    return (
        <>
        {children}
        <h2> Total count : {count}</h2>
        <button onClick={toggleClickerClick}> { hasClicker ? 'Hide' : 'Show'} Clicker </button>
        { hasClicker && <> 
        {[...Array(clickersCount)].map((value, index) => 
            <Clicker 
            increment={increment} 
            key={`count${index}`}
            keyName={`count${index}`}
            color={colors[index]} />
            )}
        
      
        
       
        </> }
        <People />
        </>
    )
}