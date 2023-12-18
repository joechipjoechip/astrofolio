import { StrictMode } from 'react'
import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, SoftShadows, useHelper } from '@react-three/drei'
import * as THREE from "three"

export default function Experience(){

    return <>

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


    </>
}