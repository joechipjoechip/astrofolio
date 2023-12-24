import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'

import "./HelloReact.css"
import { useEffect } from "react"

import { useStore } from '@nanostores/react';
import { globalStore, setColorMode } from "@/stores/globalStore.js"

// shaderBackup = {
//     animate: "on",
//     axesHelper: "off",
//     bgColor1: "#000000",
//     bgColor2: "#000000",
//     brightness: "1.2",
//     cAzimuthAngle: "180",
//     cDistance: "3.9",
//     cPolarAngle: "90",
//     cameraZoom: "9.1",
//     color1: "ff52b4",
//     color2: "ffbd96",
//     color3: "f6eddb",
//     destination: "onCanvas",
//     embedMode: "off",
//     // envPreset: "city",
//     format: "gif",
//     fov: "20",
//     frameRate: "10",
//     gizmoHelper: "hide",
//     grain: "off",
//     lightType: "3d",
//     pixelDensity: "1",
//     positionX: "0",
//     positionY: "0.7",
//     positionZ: "0",
//     range: "disabled",
//     rangeEnd: "40",
//     rangeStart: "0",
//     reflection: "0.1",
//     rotationX: "50",
//     rotationY: "0",
//     rotationZ: "0",
//     shader: "defaults",
//     type: "waterPlane",
//     uAmplitude: "0",
//     uDensity: "2.5",
//     uFrequency: "0",
//     uSpeed: "0.1",
//     uStrength: "1",
//     uTime: "8",
//     wireframe: "false",
// }

const targetNode = document.querySelector("html")
const observerConfig = { attributes: true, childList: false }
const observer = new MutationObserver(observerCallback);

observer.observe(targetNode, observerConfig);

function observerCallback( event ){
    if( event[0].target.classList.contains("light") ){
        console.log("set color mode to : light")
        setColorMode("light")
    } else {
        console.log("set color mode to : dark")
        setColorMode("dark")
    }
}


export default function HelloReact(){
    // const shaderDark = {
    //     orbitControls: "disabled",
    
    //     brightness: 1.1,
    //     cAzimuthAngle: 180,
    //     cDistance: 3.9,
    //     cPolarAngle: 115,
    //     cameraZoom: 1,
    //     color1: "5606FF",
    //     color2: "FE8989",
    //     color3: "000000",
    //     destination: "onCanvas",
    //     embedMode: "off",
    //     envPreset: "city",
    //     format: "gif",
    //     fov: 45,
    //     frameRate: 10,
    //     grain: "off",
    //     lightType: "3d",
    //     pixelDensity: 1,
    //     positionX: -0.5,
    //     positionY: 0.1,
    //     positionZ: 0,
    //     range: "enabled",
    //     rangeEnd: 40,
    //     rangeStart: 0,
    //     reflection: 0.1,
    //     rotationX: 0,
    //     rotationY: 0,
    //     rotationZ: 235,
    //     shader: "defaults",
    //     type: "waterPlane",
    //     uAmplitude: 0,
    //     uDensity: 2.1,
    //     uFrequency: 5.5,
    //     uSpeed: 0.1,
    //     uStrength: 1.1,
    //     uTime: 0.2,
    //     wireframe: false,
    // }

    // const shaderDark = {
    //     animate: "on",
    //     axesHelper: "off",
    //     bgColor1: "#000000",
    //     bgColor2: "#000000",
    //     brightness: "1.2",
    //     cAzimuthAngle: "180",
    //     cDistance: "3.9",
    //     cPolarAngle: "90",
    //     cameraZoom: "9.1",
    //     color1: "ff52b4",
    //     color2: "ffbd96",
    //     color3: "f6eddb",
    //     destination: "onCanvas",
    //     embedMode: "off",
    //     // envPreset: "city",
    //     format: "gif",
    //     fov: "20",
    //     frameRate: "10",
    //     gizmoHelper: "hide",
    //     grain: "off",
    //     lightType: "3d",
    //     pixelDensity: "1",
    //     positionX: "0",
    //     positionY: "0.7",
    //     positionZ: "0",
    //     range: "disabled",
    //     rangeEnd: "40",
    //     rangeStart: "0",
    //     reflection: "0.1",
    //     rotationX: "50",
    //     rotationY: "0",
    //     rotationZ: "0",
    //     shader: "defaults",
    //     type: "waterPlane",
    //     uAmplitude: "0",
    //     uDensity: "2.5",
    //     uFrequency: "0",
    //     uSpeed: "0.1",
    //     uStrength: "1",
    //     uTime: "8",
    //     wireframe: "false",
    // }

    // const shaderDark = {
    //     animate: "on",
    //     axesHelper: "off",
    //     bgColor1: "000000",
    //     bgColor2: "000000",
    //     brightness: "1.2",
    //     cAzimuthAngle: "180",
    //     cDistance: "2.6",
    //     cPolarAngle: "80",
    //     cameraZoom: "9.1",
    //     color1: "005857",
    //     color2: "004060",
    //     color3: "360052",
    //     destination: "onCanvas",
    //     embedMode: "off",
    //     envPreset: "city",
    //     format: "gif",
    //     fov: "45",
    //     frameRate: "10",
    //     gizmoHelper: "hide",
    //     grain: "off",
    //     lightType: "3d",
    //     pixelDensity: "1",
    //     positionX: "0",
    //     positionY: "0",
    //     positionZ: "0",
    //     range: "disabled",
    //     rangeEnd: "40",
    //     rangeStart: "0",
    //     reflection: "0.1",
    //     rotationX: "60",
    //     rotationY: "0",
    //     rotationZ: "0",
    //     shader: "defaults",
    //     type: "waterPlane",
    //     uAmplitude: "0",
    //     uDensity: "1.6",
    //     uFrequency: "0",
    //     uSpeed: "0.05",
    //     uStrength: "2",
    //     uTime: "8",
    //     wireframe: "false",
    // }

    // const shaderInfierno = {
    //     animate: "on",
    //     axesHelper: "off",
    //     bgColor1: "000000",
    //     bgColor2: "000000",
    //     brightness: "1",
    //     cAzimuthAngle: "180",
    //     cDistance: "2.1",
    //     cPolarAngle: "70",
    //     cameraZoom: "9.1",
    //     color1: "4d0061",
    //     color2: "380016",
    //     color3: "ff8400",
    //     destination: "onCanvas",
    //     embedMode: "off",
    //     envPreset: "dawn",
    //     format: "gif",
    //     fov: "45",
    //     frameRate: "10",
    //     gizmoHelper: "hide",
    //     grain: "off",
    //     lightType: "3d",
    //     pixelDensity: "1",
    //     positionX: "0",
    //     positionY: "0",
    //     positionZ: "1.3",
    //     range: "disabled",
    //     rangeEnd: "40",
    //     rangeStart: "0",
    //     reflection: "0.1",
    //     rotationX: "60",
    //     rotationY: "0",
    //     rotationZ: "-90",
    //     shader: "defaults",
    //     type: "waterPlane",
    //     uAmplitude: "0",
    //     uDensity: "3",
    //     uFrequency: "0",
    //     uSpeed: "0.05",
    //     uStrength: "0.8",
    //     uTime: "8",
    //     wireframe: "false",
    // }
    
    // const shaderLight = {
    //     animate: "on",
    //     axesHelper: "on",
    //     bgColor1: "ffffff",
    //     bgColor2: "ffffff",
    //     brightness: 1,
    //     cAzimuthAngle: 190,
    //     cDistance: 9.2,
    //     cPolarAngle: 55,
    //     cameraZoom: 9,
    //     color1: "fffcfa",
    //     color2: "ff82de",
    //     color3: "9f94ff",
    //     destination: "onCanvas",
    //     embedMode: "off",
    //     envPreset: "lobby",
    //     format: "gif",
    //     fov: 20,
    //     frameRate: 50,
    //     grain: "off",
    //     lightType: "3d",
    //     pixelDensity: 1,
    //     positionX: 0,
    //     positionY: 0,
    //     positionZ: 0,
    //     range: "disabled",
    //     rangeEnd: 40,
    //     rangeStart: 0,
    //     reflection: 0.1,
    //     rotationX: 0,
    //     rotationY: 90,
    //     rotationZ: 315,
    //     shader: "defaults",
    //     toggleAxis: false,
    //     type: "sphere",
    //     uAmplitude: 3.8,
    //     uDensity: 2.5,
    //     uFrequency: 4.5,
    //     uSpeed: 0.03,
    //     uStrength: 0.8,
    //     uTime: 0.2,
    //     wireframe: true,
    //     zoomOut: false,
    
    // }

    const shaderDark = {
        animate: "on",
        axesHelper: "off",
        bgColor1: "000000",
        bgColor2: "000000",
        brightness: "1",
        cAzimuthAngle: "180",
        cDistance: "2.7",
        cPolarAngle: "80",
        cameraZoom: "9.1",
        color1: "0053a6",
        color2: "bf0039",
        color3: "212121",
        destination: "onCanvas",
        embedMode: "off",
        envPreset: "city",
        format: "gif",
        fov: "45",
        frameRate: "10",
        gizmoHelper: "hide",
        grain: "off",
        lightType: "3d",
        pixelDensity: "1",
        positionX: "0",
        positionY: "0",
        positionZ: "0",
        range: "disabled",
        rangeEnd: "40",
        rangeStart: "0",
        reflection: "0.1",
        rotationX: "50",
        rotationY: "0",
        rotationZ: "-60",
        shader: "defaults",
        type: "waterPlane",
        uAmplitude: "0",
        uDensity: "2.2",
        uFrequency: "0",
        uSpeed: "0.1",
        uStrength: "1.5",
        uTime: "8",
        wireframe: "false",
    }

    const shaderLight = {
        animate: "on",
        axesHelper: "off",
        bgColor1: "000000",
        bgColor2: "000000",
        brightness: "1.1",
        cAzimuthAngle: "180",
        cDistance: "2.4",
        cPolarAngle: "70",
        cameraZoom: "9.1",
        color1: "ff6ea5",
        color2: "82e8ff",
        color3: "9900ff",
        destination: "onCanvas",
        embedMode: "off",
        envPreset: "dawn",
        format: "gif",
        fov: "45",
        frameRate: "10",
        gizmoHelper: "hide",
        grain: "off",
        lightType: "3d",
        pixelDensity: "1",
        positionX: "0",
        positionY: "0",
        positionZ: "1.3",
        range: "disabled",
        rangeEnd: "40",
        rangeStart: "0",
        reflection: "0.1",
        rotationX: "60",
        rotationY: "0",
        rotationZ: "90",
        shader: "defaults",
        type: "waterPlane",
        uAmplitude: "0",
        uDensity: "2.5",
        uFrequency: "0",
        uSpeed: "0.05",
        uStrength: "1.7",
        uTime: "8",
        wireframe: "false",
    }
    
    const $store = useStore(globalStore)

  return (
    <>
        <div className='react-canvas-wrapper'>

            {$store.colorMode === 'light' && <ShaderGradientCanvas
                    importedfiber={{ ...fiber, ...drei, ...reactSpring }}
                    style={{
                        position: 'absolute',
                        top: 0,
                    }}
                >
                    <ShaderGradient 
                        {...shaderLight}
                    />
                </ShaderGradientCanvas>
            }

            {$store.colorMode === 'dark' && <ShaderGradientCanvas
                    importedfiber={{ ...fiber, ...drei, ...reactSpring }}
                    style={{
                        position: 'absolute',
                        top: 0,
                    }}
                >
                    <ShaderGradient 
                        {...shaderDark}
                    />
                </ShaderGradientCanvas>
            }

        </div>
    </>
  )
}