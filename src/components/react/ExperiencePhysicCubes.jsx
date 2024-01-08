import { useRef, useMemo } from 'react'
import { Perf } from 'r3f-perf'
import { CuboidCollider, InstancedRigidBodies, Physics, RigidBody } from '@react-three/rapier'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { useMatcapTexture } from '@react-three/drei'

import { useFrame, useThree } from '@react-three/fiber'

import { mouseStore, globalStore } from "@/stores/globalStore"
import { useStore } from '@nanostores/react';

export default function Experience(){
    
    const { camera } = useThree()
    camera.position.set(0,0.5,6.6)
    
    const $mouseStore = useStore(mouseStore)
    const $globalStore = useStore(globalStore)
    
    const [ matcapTexture ] = useMatcapTexture($globalStore.colorMode === "light" ? "CCF6FA_9DD9EB_82C5D9_ACD4E4" : "660505_F2B090_DD4D37_AA1914", 256)

    const bloomIntensity = $globalStore.colorMode === "light" ? 0.5 : 11.5


    console.log("matcapTexture : ", matcapTexture)

    const lightRef = useRef()
    const lightRef2 = useRef()
    const cubes = useRef()
    const bodies = useRef()

    const invisibleWallWidth = 6.5

    const cubesCount = 25
    const cubeSize = 0.35

    const gravityRatio = 0.0002

    const instances = useMemo(() => {
        const instances = []

        for(let i = 0; i < cubesCount; i++){

            instances.push({
                key: `instance_${i}`,
                position: [
                    (i) / 8 - 2, 
                    (i) / 8 - 2, 

                    // i / 5 - 2, 
                    // (Math.random() - 0.5) * 2 * cubeSize, 
                    (Math.random() - 0.5) * 1.5 * cubeSize
                ],
                rotation: [
                    0, 
                    0, 
                    0
                ],
                scale: [
                    cubeSize * (i % 5 === 0 ? 3.2 : 1),
                    cubeSize * (i % 5 === 0 ? 3.2 : 1),
                    cubeSize * (i % 5 === 0 ? 3.2 : 1),
                ],
                restitution: (i % 5 === 0 ? 0.7 : 0.2)
            })
        }

        return instances
    }, [])

    useFrame((state, delta) => {

        const time = state.clock.getElapsedTime()

        bodies.current.forEach((body, index) => {

            // every 10seconds, multiply by 5 for 1 second
            const multiplier = Math.floor(time) % 10 === 0 ? 5 : 1
            // const multiplier = $mouseStore.x > 0.5 ? 5 : 1

            // if(multiplier === -10){
            //     console.log("accelerating !")
            // }


            if( index % 5 === 0 ){
                body.applyImpulse({ 
                    x: Math.sin(time) * gravityRatio * multiplier * -20, 
                    y: Math.sin(time) * gravityRatio * multiplier * 20, 
                    z: 0, 
                    // y: 0, 
                    // z: 0 
                }, true);    
            } else {
                body.applyImpulse({ 
                    x: Math.sin(-time) * gravityRatio * -multiplier, 
                    y: Math.sin(-time) * gravityRatio * -multiplier, 
                    z: 0, 
                    // y: 0, 
                    // z: 0 
                }, true);
            }

            // if( Math.abs($mouseStore.x - 0.5) > 0.7 || Math.abs($mouseStore.y) > 0.7 ){
            //     body.applyImpulse({ 
            //         x: $mouseStore.x / 100, 
            //         y: $mouseStore.y / 100, 
            //         z: 0
            //     }, true)
            // }
    
        })

        
        // state.camera.position.set(
        //     -$mouseStore.x,
        //     $mouseStore.y * -2.5 + 1 ,
        //     6.1
        // )
    })

    return <>

                <Perf position="top-left" />

                <EffectComposer 
                    disableNormalPass
                >
                    <Bloom 
                        mipmapBlur
                        intensity={bloomIntensity}
                        // luminanceThreshold={ 1.5 }
                        // default is 0.9 (theshold = seuil, de luminosité à partir duquel le bloom s'applique)
                    />
                </EffectComposer>

                {/* <spotLight 
                    ref={ lightRef } 
                    color="white" 
                    intensity={1.45} 
                    position={ [0, 0, -10] } 
                    castShadow 
                    shadow-mapSize={[ 1024, 1024 ]}
                /> */}
                <spotLight 
                    ref={ lightRef2 } 
                    color="#004183" 
                    intensity={5.45} 
                    position={ [3, 3, -10] } 
                    castShadow 
                    shadow-mapSize={[ 1024, 1024 ]}
                />

                <Physics 
                    // debug
                    gravity={[0,0,0]}
                >

                    {/* invisibles walls */}
                    <RigidBody type="fixed" restitution={0.01}>

                        {/* Back */}
                        <CuboidCollider 
                            args={[ 10, 6, 0.5]} 
                            position={[0, 0, invisibleWallWidth / 5 ]} />
                        {/* Front */}
                        <CuboidCollider 
                            args={[ 10, 6, 0.5]} 
                            position={[0, 0, -invisibleWallWidth / 5 ]} />

                        {/* Left */}
                        <CuboidCollider 
                            args={[ 0.5, 6, 10]} 
                            position={[invisibleWallWidth + 2.5, 0, 0 ]} />
                        {/* Right */}
                        <CuboidCollider 
                            args={[ 0.5, 6, 10]} 
                            position={[-invisibleWallWidth - 2.5, 0, 0 ]} />

                        {/* ground */}
                        <CuboidCollider 
                            args={[ invisibleWallWidth * 2, 0.5, invisibleWallWidth * 2]} 
                            position={[-invisibleWallWidth, -4, 0 ]} />
                        {/* roof */}
                        <CuboidCollider 
                            args={[ invisibleWallWidth * 2, 0, invisibleWallWidth * 2]} 
                            position={[-invisibleWallWidth, 5, 0 ]} />
                    </RigidBody>

                    {/*  cubes falling */}
                    <InstancedRigidBodies 
                        instances={ instances } 
                        // onClick={ genericCubeJump } 
                        // scale={cubeSize}
                        gravityScale={2}
                        ref={ bodies } 
                    >
                        <instancedMesh 
                            ref={ cubes } 
                            args={[null,null, cubesCount]} 
                            // castShadow 
                            // receiveShadow
                        >
                            <boxGeometry />
                            <meshMatcapMaterial matcap={ matcapTexture } />
                        </instancedMesh>
                    </InstancedRigidBodies>

                </Physics>


            </>
        
}
