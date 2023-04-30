// import { OrbitControls } from '@react-three/drei'
import Lights from './Lights.jsx'
import {Level} from './Level.jsx'
import { Physics, Debug } from '@react-three/rapier'
import Player from './Player.jsx'
import useGame from './stores/useGame.jsx'
import Effects from './Effects.jsx'

export default function Experience()
{
    const blocksCount = useGame(state => state.blocksCount )
    const blocksSeed = useGame(state => state.blocksSeed)
    return <>
        
        {/* <OrbitControls makeDefault /> */}

        <Physics>
            {/* <Debug /> */}
            <color args={[ '#252731' ]} attach="background" />
            <Lights />
            <Level count={blocksCount} seed={blocksSeed}/>
            <Player />
        </Physics>
       <Effects />
    </>
}