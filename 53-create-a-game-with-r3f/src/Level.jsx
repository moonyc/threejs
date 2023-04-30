import * as THREE from 'three'
import { useMemo } from 'react'


// Blocks componenets 

import BlockStart from './BlockStart'
import BlockSpinner from './BlockSpinner'
import BlockLimbo from './BlockLimbo'
import BlockAxe from './BlockAxe'
import BlockEnd from './BlockEnd'
import Bounds from './Bounds'






export function Level({
    count = 5, 
    types=[BlockSpinner, BlockAxe, BlockLimbo],
    seed = 0
}) 
{
    const blocks = useMemo(() => 
    {
        const blocks = []
        
       for( let i = 0; i < count; i++)
       {
          const type = types[ Math.floor(Math.random() * types.length) ]
          blocks.push(type)
       }

        return blocks
    }, [count, types, seed])
    return <>
       

        <BlockStart position={[0,0,0]} />
        { blocks.map((Block, index) => <Block key={ index } position={ [0,0, - (index + 1) * 4] }/>)}
        <BlockEnd position={[0, 0, - (count + 1) * 4]} />
        <Bounds  length={ count + 2} />
    </>
}