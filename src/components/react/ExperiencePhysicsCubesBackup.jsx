import { useEffect, useRef, useState, useMemo } from 'react'
import { OrbitControls, TransformControls, Html, Text, Float, useHelper, AccumulativeShadows, RandomizedLight, ContactShadows, Sky, Environment, Lightformer } from '@react-three/drei'
import { Bloom, DepthOfField, EffectComposer, Glitch, Noise, Vignette } from '@react-three/postprocessing'
import { useControls } from 'leva'
import Cube from './Cube'
import { Perf } from 'r3f-perf'
import * as THREE from "three"
import { CuboidCollider, InstancedRigidBodies, Physics, RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'

import { mouseStore } from "@/stores/globalStore"
import { useStore } from '@nanostores/react';

export default function Experience(){

    const $mouseStore = useStore(mouseStore)

    const lightRef = useRef()
    const sphereRef = useRef()
    const cubeRef = useRef()
    const twister = useRef()
    const cubes = useRef()
    const ground = useRef()

    const cubesCount = 25

    // un bon moyen de créer une valeur au mounted et pas à chaque rerender, est d'utiliser : useState avec une fonction anonyme qui renvoi une valeur, genre : 
    // const [ hitSound ] = useState(() => new Audio("./audios/hit.mp3"))


    const cubeJump = () => {
        console.log("jump triggered")
        cubeRef.current.applyImpulse({ x: 1, y: 9, z: 0})

        // Torque = rotation
        cubeRef.current.applyTorqueImpulse({ 
            x: Math.random() - 0.5, 
            y: Math.random() - 0.5, 
            z: Math.random() - 0.5
        })
    }


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

    useHelper(lightRef, THREE.SpotLightHelper, 0.5)

    // useEffect(() => {

    //     // utiliser les instanceMeshes en cas de multitudes, c'est hyper opti puisque tous les cubes ici vont être draw en un seul drawCall
    //     for(let i = 0; i < cubesCount; i++){

    //         const matrix = new THREE.Matrix4()

    //         matrix.compose(
    //             new THREE.Vector3(i *2, 0, 0),
    //             new THREE.Quaternion(),
    //             new THREE.Vector3(1,1,1)
    //         )
    //         // https://threejs.org/docs/#api/en/math/Matrix4.compose

    //         cubes.current.setMatrixAt(i, matrix)
    //     }
    // }, [])

    // au moment où on se sert de instanciedrigidbodies, on a plus besoin du useEffect ci dessus, mais on passe à un autre fonctionnement avec useMemo()

    const instances = useMemo(() => {
        const instances = []

        for(let i = 0; i < cubesCount; i++){

            instances.push({
                key: `instance_${i}`,
                position: [
                    (Math.random() - 0.5) * 2, 
                    i, 
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

    // const { position, color } = useControls("sphere", {
    //     position: {
    //         value: { x: 0, y: 2 },
    //         step: 0.1,
    //         joystick: "invertY"
    //     },
    //     color: "#FF0000"
    // })

    // const { envMapIntensity } = useControls("envMapIntensity", {
    //     envMapIntensity: { value: 1, min: 0, max: 20 }
    // })

    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime()

        // rotation
        const eulerRotation = new THREE.Euler(0, time * 3, 0)
        const quaternionRotation = new THREE.Quaternion()

        quaternionRotation.setFromEuler(eulerRotation)
        twister.current.setNextKinematicRotation(quaternionRotation)

        // deplacements
        const angle = time * 0.5
        const x = Math.cos(angle) *2
        const z = Math.sin(angle) *2

        twister.current.setNextKinematicTranslation({x, z, y: 0})

        if( $mouseStore ){
            const ratio = 4
            // ground.current.position.set(
            //     $mouseStore.x * ratio, 
            //     $mouseStore.y * ratio, 
            //     0
            // )
            ground.current.parent.parent.position.set(
                $mouseStore.x * ratio, 
                $mouseStore.y * ratio, 
                0
            )

            // twister.current.setNextKinematicTranslation({x: $mouseStore.x, z: $mouseStore.y, y: 0})

            // twister.current.position?.set(
            //     $mouseStore.x * ratio, 
            //     $mouseStore.y * ratio, 
            //     0
            // )
            
        }
    })

    const collisionEnter = () => {
        // console.log("collision enter")

        // hitSound.currentTime = 0
        // hitSound.volume = Math.random()
        // hitSound.play()

    }


    return <>

                <Perf position="top-left" />

                <OrbitControls makeDefault/>
                <color args={["black"]} />

                <EffectComposer 
                    disableNormalPass
                >

                    {/* <DepthOfField 
                        focusDistance={ 0.025 }
                        focalLength={ 0.015 }
                        bokehScale={ 15 }
                    /> */}
                    {/* <Bloom 
                        mipmapBlur
                        intensity={1}
                        // luminanceThreshold={ 1.5 }
                        // default is 0.9 (theshold = seuil, de luminosité à partir duquel le bloom s'applique)
                    /> */}
                </EffectComposer>

                {/* <Environment
                    // background 
                    // resolution={ 128 }
                    ground={{
                        height: 7,
                        radius: 28,
                        scale: 100
                    }}
                    preset="night"
                >
                    <Lightformer 
                        position={[0,0,-6]}
                        scale={4}
                        intensity={20}
                        color={"red"}
                        // form="ring"
                    />
                </Environment> */}

                <spotLight 
                    ref={ lightRef } 
                    color="white" 
                    intensity={1} 
                    position={ [15, 7, 5] } 
                    castShadow 
                    shadow-mapSize={[ 1024, 1024 ]}
                />

                <spotLight 
                    ref={ lightRef } 
                    color="orange" 
                    intensity={1} 
                    position={ [-10, 7, 7] } 
                    castShadow 
                    shadow-mapSize={[ 1024, 1024 ]}
                />

                {/* <ambientLight args={["red", 0.55]} /> */}

                

                <Physics 
                    // debug
                    gravity={[ 0, -6, 0 ]}
                    // gravité globale, et les gravités relatives sont possible avec l'attribut gravityScale (float) sur les rigidBodies (c'est donc un ratio multiplicateur, qui peut être négatif/positif)
                >

                    <group>

                        {/* <RigidBody>
                            <Cube scale={[2, 2, 2]} rotation={[1, 2, 1]} />
                            <Cube scale={[1, 1, 1]} position={ [3, 1, -1] }/>
                        </RigidBody> */}



                        {/* concernant les hitbox (visible en mode debug) 

                            cuboid : par defaut, très opti
                            ball : pour les sphères, très opti
                            hull: pour les formes complexes mais va créer une enveloppe
                            qui ne pourra souvent pas prendre en compte la réelle complexité de l'objet mais seulement sa forme externe

                            trimesh : est le meilleur collider pour les formes complexes
                            par contre ce n'est pas opti du tout de l'utiliser pour tout
                            il vaut mieux le réserver à l'élément qui a le type="fixed"

                            enfin, on peut mettre colliders à false et faire ses propres colliders en insérant une balise dans <RigidBody>

                            la taille d'un custom collider est relative au mesh concerné, plus ou moins, voir : https://rapier.rs/javascript3d/classes/Cuboid.html

                            nb : on peut donner plusieurs colliders à un même mesh, et donc créer des colliders complexes à partir de formes primitives

                            enfin, on peut donner au <RigidBody> les position / rotation mais pas le scale

                            nb : HeighFieldCollider permet de donner un volume à une map par exemple, et c'est plus opti que le trimesh puisque ca ne donne les valeurs des vertices que sous forme de grille et pas sous forme de forme hyper détaillée (mais ca ne permet pas de faire de cave ou de trous, ce n'est qu'une surface)

                            // - - - - -

                            Les réglages de la physique : 

                            restitution : force restituée, ne pas oublier de parametrer le floor à 1 pour obtenir des comportements valables pour les rigidbodies mobiles réglés à 1 aussi

                            friction: frottement, default = 0.7 (pareil, penser à donner ça au floor)

                            mass : automatiquement calculée par rapport à la taille et la forme du mesh (ne pas oublier : peu importe la mass d'un objet, il tombera tjrs à la même vitesse) + pour la mass, on est obligé de passer par son propre collider custom


                            // - - - - - Fixed / Dynamic / Kinematic - - - - -
                            si on doit bouger un objet rigid programatiquement, il vaut mieux utiliser le type Kinematic (qui garde les vélocités etc..)

                            
                        */}

                        <RigidBody
                            colliders={ false } 
                            rotation-x={Math.PI * 0.5} 
                            position={[0,12,0]}
                            gravityScale={0.15}
                        >
                            <CuboidCollider args={[1,1,1]} />
                            <mesh castShadow>
                                <torusGeometry />
                                <meshStandardMaterial color="mediumpurple" />
                            </mesh>
                        </RigidBody>

                        <RigidBody 
                            ref={ twister }
                            type="kinematicPosition"
                            onCollisionEnter={ collisionEnter }
                            // onCollisionExit={ collisionExit }
                            // onSleep={callback }
                            // onWake={callback }
                        >
                            <mesh>
                                <boxGeometry 
                                    args={[ 0.4, 0.4, 3 ]} 
                                    position={[0,-0.5,0]}
                                />
                                <meshStandardMaterial  emissive={"#ffffff"} emissiveIntensity={1.8} />
                            </mesh>
                        </RigidBody>
                        

                        <RigidBody 
                            ref={ cubeRef } 
                            colliders="cuboid"
                            position={[0, 2, 0]}
                            // restitution={ 0.25 }
                            onClick={ cubeJump }
                            gravityScale={20}
                        >
                            <mesh castShadow>
                                <boxGeometry />
                                <meshStandardMaterial color="black" />
                            </mesh>
                        </RigidBody>

                        <RigidBody 
                            ref={ sphereRef } 
                            colliders="ball" 
                            gravityScale={0.15}
                            restitution={ 1 }
                        >
                            <mesh position={[ 0, 0, 0.2 ]}>
                                <sphereGeometry />
                                <meshStandardMaterial color={'red'} roughness={0} castShadow/>
                                <Html 
                                    wrapperClass='floatingDiv' 
                                    // position={[ 1, 1, 0 ]}
                                    center
                                    distanceFactor={ 6 }
                                    // occlude={[ cubeRef ]}
                                >
                                    Hey
                                </Html>
                            </mesh>
                        </RigidBody>


                    </group>

                    <RigidBody type="fixed" restitution={0.5}>
                        <mesh
                            ref={ground}
                            rotation-x={Math.PI * -0.5} scale={5} position-y={-0.5} receiveShadow>
                            <boxGeometry args={[4,4, 0.1]} />
                            <meshStandardMaterial color="brown" />
                        </mesh>
                    </RigidBody>


                    {/* invisibles walls around the floor */}
                    <RigidBody type="fixed">
                        <CuboidCollider args={[ 10, 5, 0.5]} position={[0, 1, 2.5 ]} />
                        <CuboidCollider args={[ 10, 5, 0.5]} position={[0, 1, -2.5 ]} />

                        <CuboidCollider args={[ 0.5, 5, 10]} position={[2.5, 1, 0 ]} />
                        <CuboidCollider args={[ 0.5, 5, 10]} position={[-2.5, 1, 0 ]} />
                    </RigidBody>

                    {/*  cubes falling */}
                    <InstancedRigidBodies 
                        instances={ instances } 
                        onClick={ genericCubeJump } 
                        scale={[0.32,0.32,0.32]}
                    >
                        <instancedMesh 
                            ref={ cubes } 
                            args={[null,null, cubesCount]} 
                            castShadow 
                        >
                            <boxGeometry />
                            <meshStandardMaterial 
                                color="#050505" 
                                roughness={0.5}
                                metalness={0.5}
                            />
                            {/* <meshPhysicalMaterial 
                                // color="red"
                                transparent
                                transmission={ 0.002 }
                                thickness={ 1 }
                                ior={ 2.4 }
                                clearcoat={ 0.5 }
                                clearcoatRoughness={ 0 }
                                sheen={1}
                                sheenRoughness={0.75}
                                sheenColor={ [1,1,1] }
                                iridescence={1}
                                iridescenceIOR={1}
                            />  */}
                        </instancedMesh>
                    </InstancedRigidBodies>

                </Physics>


            </>
        
}
