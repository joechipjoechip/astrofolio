// import './App.css'
// import Experience from './ExperienceNine.jsx'
import Experience from './ExperiencePhysicCubes.jsx'
import { Canvas } from '@react-three/fiber'
// import { StrictMode } from 'react'

function App() {

  return (
    // <StrictMode>
      <Canvas
        flat
        // flat permet de régler le toneMapping à noToneMapping
        // ce qui rend les couleurs plus cohérentes avec nos exports depuis blender
        shadows
      >
        {/* <color args={[ "#000000" ]} attach="background" /> */}
        <Experience />
      </Canvas>
     // </StrictMode> 
  )
}

export default App