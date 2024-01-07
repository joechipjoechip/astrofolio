import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Bloom, DepthOfField, EffectComposer, Glitch, Noise, Vignette } from '@react-three/postprocessing'
import { BlendFunction, GlitchMode } from 'postprocessing'
import { useWireframeUniforms } from '@react-three/drei/materials/WireframeMaterial'
import { useFrame } from '@react-three/fiber'

export default function Experience(){


    // le vignette va fonctionner mais pas sur le background de l'expérience
    // pour résoudre ça il suffit de rajouter un background, avec <color> par exemple

    useFrame(() => {
        console.log('check frame')
    })

    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <color args={["#000000"]} attach="background" />

        <EffectComposer 
            disableNormalPass
        >
            <Vignette 
                // offset - darkness etc
                blendFunction={ BlendFunction.COLOR_BURN }
            />

            {/* <Glitch 
                delay={[0.5,1]}
                duration={[0.1,0.3]}
                strength={[0.2,0.4]}
                mode={ GlitchMode.CONSTANT_MILD }
            /> */}

            <Noise 
                premultiply
                blendFunction={ BlendFunction.SOFT_LIGHT }
            />

            <Bloom 
                mipmapBlur
                intensity={0.9}
                // luminanceThreshold={ 1.5 }
                // default is 0.9 (theshold = seuil, de luminosité à partir duquel le bloom s'applique)
            />

            {/* <DepthOfField 
                focusDistance={ 0.025 }
                focalLength={ 0.025 }
                bokehScale={ 6 }
            /> */}

        </EffectComposer>

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

        <mesh castShadow position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh castShadow position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color={[1.2, 1, 4]} />
            {/* <meshStandardMaterial 
                color="white" 
                emissive="orange" 
                emissiveIntensity={2}
            /> */}
        </mesh>

        <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}