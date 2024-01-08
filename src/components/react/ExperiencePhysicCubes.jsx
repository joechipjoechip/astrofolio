import { useRef, useMemo } from 'react'
import { Perf } from 'r3f-perf'
import { CuboidCollider, InstancedRigidBodies, Physics, RigidBody } from '@react-three/rapier'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { useMatcapTexture } from '@react-three/drei'

import { useFrame, useThree } from '@react-three/fiber'

import { mouseStore } from "@/stores/globalStore"
import { useStore } from '@nanostores/react';

export default function Experience(){

    const [ matcapTexture ] = useMatcapTexture("660505_F2B090_DD4D37_AA1914", 256)
    // const [ matcapTexture ] = useMatcapTexture("CCF6FA_9DD9EB_82C5D9_ACD4E4", 256)

    const { camera } = useThree()
    camera.position.set(0,0.5,6.2)

    const $mouseStore = useStore(mouseStore)

    const lightRef = useRef()
    const cubes = useRef()
    const bodies = useRef()

    const invisibleWallWidth = 6.5

    const cubesCount = 25
    const cubeSize = 0.35

    const ratioGravity = 0.0006

    const instances = useMemo(() => {
        const instances = []

        for(let i = 0; i < cubesCount; i++){

            instances.push({
                key: `instance_${i}`,
                position: [
                    (Math.random() - 0.5) * 2 * cubeSize, 
                    i / 5, 
                    (Math.random() - 0.5) * 2 * cubeSize
                ],
                rotation: [
                    Math.random() - 0.5, 
                    Math.random() - 0.5, 
                    Math.random() - 0.5
                ],
                scale: [
                    cubeSize * (i % 4 === 0 ? 2.5 : 1),
                    cubeSize * (i % 4 === 0 ? 2.5 : 1),
                    cubeSize * (i % 4 === 0 ? 2.5 : 1),
                ],
                restitution: (i % 4 === 0 ? 0.7 : 0.2)
            })
        }

        return instances
    }, [])

    useFrame((state, delta) => {

        const time = state.clock.getElapsedTime()

        bodies.current.forEach((body, index) => {

            if( index % 2 === 0 ){
                body.applyImpulse({ 
                    x: Math.sin(time) * ratioGravity, 
                    y: Math.sin(time) * ratioGravity, 
                    z: 0, 
                    // y: 0, 
                    // z: 0 
                }, true);    
            } else {
                body.applyImpulse({ 
                    x: Math.sin(-time) * ratioGravity, 
                    y: Math.sin(-time) * ratioGravity, 
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
        //     $mouseStore.y + 1 ,
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
                        intensity={.75}
                        // luminanceThreshold={ 1.5 }
                        // default is 0.9 (theshold = seuil, de luminosité à partir duquel le bloom s'applique)
                    />
                </EffectComposer>

                <spotLight 
                    ref={ lightRef } 
                    color="white" 
                    intensity={1.45} 
                    position={ [0, 0, -10] } 
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
