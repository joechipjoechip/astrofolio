import { StrictMode } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import "./HelloReact.css"

export default function Experience(){
    return <>

        <div className='react-canvas-wrapper'>

            <StrictMode>
                
                <Canvas>

                    <OrbitControls makeDefault /> 

                    <ambientLight args={["white", 0.5]} />

                    <mesh rotation-x={Math.PI * -0.5} scale={10} position-y={-1} receiveShadow>
                        <planeGeometry />
                        <meshStandardMaterial color="limegreen" />
                    </mesh>

                </Canvas>

            </StrictMode>

        </div>

    </>
}
