
import * as THREE from 'three'
import { useMemo, useRef, useEffect  } from 'react'

export default function CustomObject()
{
    const geometry = useRef()
    

    useEffect(() => {
        geometry.current.computeVertexNormals()
    }, [])

    
    const verticesCount = 10 * 3 
    
    const positions = useMemo(() => {
        const positions = new Float32Array(verticesCount * 3)

        for(let i = 0; i < verticesCount * 3; i++) 
         
            positions[i] = (Math.random() - 0.5) * 3
        
        return positions
    }, [])


    return <mesh>
        <bufferGeometry ref={geometry}>
            <bufferAttribute 
                attach="attributes-position"
                count= { verticesCount }
                itemSize= {3}
                array={ positions }
            />
        </bufferGeometry>
        <meshStandardMaterial color="red" side={ THREE.DoubleSide }/>
    </mesh>
}