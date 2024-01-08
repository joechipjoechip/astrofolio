import { useRef, useMemo } from 'react'
import { Perf } from 'r3f-perf'
import * as THREE from "three"
import { CuboidCollider, InstancedRigidBodies, Physics, RigidBody } from '@react-three/rapier'
import { Bloom, DepthOfField, EffectComposer, Glitch, Noise, Vignette } from '@react-three/postprocessing'
import { useMatcapTexture } from '@react-three/drei'

import { useFrame } from '@react-three/fiber'

import { mouseStore } from "@/stores/globalStore"
import { useStore } from '@nanostores/react';

export default function Experience(){

    const [ matcapTexture ] = useMatcapTexture("660505_F2B090_DD4D37_AA1914", 256)
    // const [ matcapTexture ] = useMatcapTexture("CCF6FA_9DD9EB_82C5D9_ACD4E4", 256)

    const $mouseStore = useStore(mouseStore)

    const lightRef = useRef()
    const cubes = useRef()
    const bodies = useRef()

    const invisibleWallWidth = 6.5

    const cubesCount = 20
    const cubeSize = 0.35

    const ratioGravity = 0.0006

    // un bon moyen de créer une valeur au mounted et pas à chaque rerender, est d'utiliser : useState avec une fonction anonyme qui renvoi une valeur, genre : 
    // const [ hitSound ] = useState(() => new Audio("./audios/hit.mp3"))


    const genericCubeJump = (event) => {
        console.log("generic jump triggered : event : ", event)
        // cubeRef.current.applyImpulse({ x: 1, y: 9, z: 0})

        // // Torque = rotation
        // cubeRef.current.applyTorqueImpulse({ 
        //     x: Math.random() - 0.5, 
        //     y: Math.random() - 0.5, 
        //     z: Math.random() - 0.5
        // })
    }

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
        })

        // console.log("bodies current : ", bodies.current)

        // rotation
        const eulerRotation = new THREE.Euler(0, time * 3, 0)
        const quaternionRotation = new THREE.Quaternion()

        quaternionRotation.setFromEuler(eulerRotation)
        // twister.current.setNextKinematicRotation(quaternionRotation)

        // deplacements
        const angle = time * 0.5
        const x = Math.cos(angle) *2
        const z = Math.sin(angle) *2

        // twister.current.setNextKinematicTranslation({x, z, y: 0})

        // if( $mouseStore ){
        //     const ratio = 4

        //     ground.current.parent.parent.position.set(
        //         $mouseStore.x * ratio, 
        //         $mouseStore.y * ratio, 
        //         0
        //     )

        // }
    })

    const collisionEnter = () => {
        // console.log("collision enter")

        // hitSound.currentTime = 0
        // hitSound.volume = Math.random()
        // hitSound.play()

    }


    return <>

                <Perf position="top-left" />

                <EffectComposer 
                    disableNormalPass
                >

                    {/* <DepthOfField 
                        focusDistance={ 0.025 }
                        focalLength={ 0.015 }
                        bokehScale={ 15 }
                    /> */}
                    <Bloom 
                        mipmapBlur
                        intensity={.75}
                        // luminanceThreshold={ 1.5 }
                        // default is 0.9 (theshold = seuil, de luminosité à partir duquel le bloom s'applique)
                    />
                </EffectComposer>

                {/* <spotLight 
                    ref={ lightRef } 
                    color="red" 
                    intensity={1} 
                    position={ [15, 7, -5] } 
                    castShadow 
                    shadow-mapSize={[ 1024, 1024 ]}
                /> */}

                <spotLight 
                    ref={ lightRef } 
                    color="white" 
                    intensity={1.45} 
                    position={ [0, 0, -10] } 
                    castShadow 
                    shadow-mapSize={[ 1024, 1024 ]}
                />

                {/* <ambientLight args={["red", 0.55]} /> */}

                <Physics 
                    // debug
                    gravity={[0,0,0]}
                    // gravité globale, et les gravités relatives sont possible avec l'attribut gravityScale (float) sur les rigidBodies (c'est donc un ratio multiplicateur, qui peut être négatif/positif)
                >

                    {/* invisibles walls around the floor */}
                    <RigidBody type="fixed">
                        <CuboidCollider args={[ 10, 5, 0.5]} position={[0, 0, invisibleWallWidth / 4 ]} />
                        <CuboidCollider args={[ 10, 5, 0.5]} position={[0, 0, -invisibleWallWidth / 4 ]} />

                        <CuboidCollider args={[ 0.5, 5, 10]} position={[invisibleWallWidth, 0, 0 ]} />
                        <CuboidCollider args={[ 0.5, 5, 10]} position={[-invisibleWallWidth, 0, 0 ]} />

                        <CuboidCollider args={[ invisibleWallWidth * 2, 0.5, invisibleWallWidth * 2]} position={[-invisibleWallWidth, -4, 0 ]} />
                        <CuboidCollider args={[ invisibleWallWidth * 2, 0.5, invisibleWallWidth * 2]} position={[-invisibleWallWidth, 4, 0 ]} />
                    </RigidBody>

                    {/*  cubes falling */}
                    <InstancedRigidBodies 
                        instances={ instances } 
                        onClick={ genericCubeJump } 
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
                            {/* <meshStandardMaterial 
                                color="#FFFFFF" 
                                roughness={0.9}
                                metalness={0.1}
                            /> */}
                            <meshMatcapMaterial matcap={ matcapTexture } />
                        </instancedMesh>
                    </InstancedRigidBodies>

                </Physics>


            </>
        
}
