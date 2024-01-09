import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'
import ExperienceEntryPoint from "./ExperienceEntryPoint.jsx"

import "./HelloReact.css"

import { useStore } from '@nanostores/react';
import { 
        globalStore, 
        setColorMode,

        stepCoords
} from "@/stores/globalStore.js"

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
        pixelDensity: window.devicePixelRatio,
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
        pixelDensity: window.devicePixelRatio,
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
    const $stepCoords = useStore(stepCoords)

    console.log("stepcoords.x : ", $stepCoords.x)

  return (
    <>
        {$store.currentStepIndex === 0 && <div 
            className='react-canvas-wrapper portfolio'
            // style={{
            //     left: $stepCoords.x,
            //     width: $stepCoords.width,
            //     top: $stepCoords.y,
            //     height: $stepCoords.height
            // }}
        >
            <ExperienceEntryPoint></ExperienceEntryPoint>
        </div>}
        
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