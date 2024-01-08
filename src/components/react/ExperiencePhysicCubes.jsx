import { useRef, useMemo } from 'react'
import { Perf } from 'r3f-perf'
import * as THREE from "three"
import { CuboidCollider, InstancedRigidBodies, Physics, RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'

import { mouseStore } from "@/stores/globalStore"
import { useStore } from '@nanostores/react';

export default function Experience(){

    const $mouseStore = useStore(mouseStore)

    const lightRef = useRef()
    const cubes = useRef()
    const bodies = useRef()

    const invisibleWallWidth = 4.5

    const cubesCount = 15
    const cubeSize = 0.4

    const ratioGravity = 0.0004

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
                    (Math.random() - 0.5) * 2, 
                    i / 10, 
                    (Math.random() - 0.5) * 2
                ],
                rotation: [
                    Math.random() - 0.5, 
                    Math.random() - 0.5, 
                    Math.random() - 0.5
                ]
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

                {/* <spotLight 
                    ref={ lightRef } 
                    color="purple" 
                    intensity={3} 
                    position={ [15, 7, 5] } 
                    castShadow 
                    shadow-mapSize={[ 1024, 1024 ]}
                /> */}

                <spotLight 
                    ref={ lightRef } 
                    color="white" 
                    intensity={1} 
                    position={ [10, 5, 5] } 
                    castShadow 
                    shadow-mapSize={[ 2048, 2048 ]}
                />

                {/* <ambientLight args={["red", 0.55]} /> */}

                <Physics 
                    // debug
                    gravity={[0,0,0]}
                    // gravité globale, et les gravités relatives sont possible avec l'attribut gravityScale (float) sur les rigidBodies (c'est donc un ratio multiplicateur, qui peut être négatif/positif)
                >

                    {/* <RigidBody type="fixed" restitution={0.5}>
                        <mesh
                            ref={ground}
                            rotation-x={Math.PI * -0.5} scale={5} position-y={-0.5} receiveShadow>
                            <boxGeometry args={[4,4, 0.1]} />
                            <meshStandardMaterial color="brown" />
                        </mesh>
                    </RigidBody> */}


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
                        scale={cubeSize}
                        gravityScale={2}
                        ref={ bodies } 
                    >
                        <instancedMesh 
                            ref={ cubes } 
                            args={[null,null, cubesCount]} 
                            castShadow 
                            receiveShadow
                        >
                            <boxGeometry />
                            <meshStandardMaterial 
                                color="#FFFFFF" 
                                roughness={0.2}
                                metalness={0.1}
                            />
                        </instancedMesh>
                    </InstancedRigidBodies>

                </Physics>


            </>
        
}
