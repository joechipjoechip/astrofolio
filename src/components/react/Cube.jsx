import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function Cube({ scale = 1, position = [1, 2, -2], rotation = [0,0,0] }){

    const cubeRef = useRef()

    useFrame((state, delta) => {

        // cubeRef.current.rotation.x += delta / 10

    })

    return (
        <mesh 
            ref={ cubeRef } 
            position={position} 
            rotation={rotation} 
            scale={scale}
            castShadow 
        >
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" roughness={0}/>
        </mesh>
    )
}