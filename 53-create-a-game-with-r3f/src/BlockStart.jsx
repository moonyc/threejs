import { boxGeometry, floor1Material } from "./threeVariables"


export default function BlockStart({ position = [0,0,0]}) 
{
    
    return <group position={position}>
     <mesh
       material={floor1Material}
       geometry={boxGeometry} 
       scale={[4, 0.2, 4]}
       position={[0, -0.1, 0]} 
       receiveShadow
    />
    </group>
}