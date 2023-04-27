import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { boxGeometry, wallMaterial } from "./threeVariables";


export default function Bounds({ length = 1})
{
    return <>
       
       <RigidBody
         type="fixed"
         restitution={0.2}
         friction={0}
       >
       <mesh
            position={ [2.15, 0.75, - (length * 2) + 2]}
            geometry={boxGeometry}
            material={wallMaterial}
            scale={[0.3, 1.5, 4 * length]}
            castShadow
         />
        <mesh
            position={ [ - 2.15, 0.75, - (length * 2) + 2]}
            geometry={boxGeometry}
            material={wallMaterial}
            scale={[0.3, 1.5, 4 * length]}
            receiveShadow
         />
         <mesh
            position={ [ 0, 0.75, - (length * 4) + 2]}
            geometry={boxGeometry}
            material={wallMaterial}
            scale={[ 4, 1.5, 0.3]}
            receiveShadow
         />
         <CuboidCollider
            args={ [ 2, 0.1, 2 * length ] }
            position={ [ 0, -0.1, - (length * 2) + 2 ] }
            restitution={0.2}
            friction={1}
        />
       </RigidBody>
    </>
}