import './style.css'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <> 
      <group>
          <mesh  position={[ 1, 2, 3]} rotation-x={ 0.5 }>
             <boxGeometry />
             <meshBasicMaterial color="red" />
          </mesh>
          <mesh  position={[ 2, 2, 3]} rotation-x={ 0.5 }>
             <boxGeometry />
             <meshBasicMaterial color="green" />
          </mesh>
          <mesh  position={[ 3, 2, 3]} rotation-x={ 0.5 }>
             <boxGeometry />
             <meshBasicMaterial color="blue" />
          </mesh>
      </group>
    </>
)