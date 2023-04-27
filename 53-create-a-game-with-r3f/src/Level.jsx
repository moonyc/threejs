import * as THREE from 'three'
import { useMemo } from 'react'

// Blocks componenets 

import BlockStart from './BlockStart'
import BlockSpinner from './BlockSpinner'
import BlockLimbo from './BlockLimbo'
import BlockAxe from './BlockAxe'
import BlockEnd from './BlockEnd'

// THREE materials, geometries and settings

THREE.ColorManagement.legacyMode = false
export const boxGeometry = new THREE.BoxGeometry(1,1,1)

export const floor1Material = new THREE.MeshStandardMaterial({ color: 'limegreen'})
export const floor2Material = new THREE.MeshStandardMaterial({ color: 'greenyellow'})
export const obstacleMaterial = new THREE.MeshStandardMaterial({ color: 'orangered'})
export const wallMaterial = new THREE.MeshStandardMaterial({ color: 'slategrey'})






export function Level({
    count = 5, 
    types=[BlockSpinner, BlockAxe, BlockLimbo],
    materials = [floor1Material, floor2Material, obstacleMaterial],
    geometries = [boxGeometry]
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
    }, [count, types])
    return <>
       

        <BlockStart position={[0,0,0]} material={floor1Material} geometry={boxGeometry} />
        
    </>
}