import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'

import "./HelloReact.css"
import { useEffect, useRef } from "react"

import { useStore } from '@nanostores/react';
import { globalStore } from "@/stores/globalStore.js"

export default function HelloReact() {

    let changingValue = 1
    const gradientWrapper = useRef()
    const $store = useStore(globalStore)

    console.log("store react : ", $store)

    useEffect(() => {
        // console.log("from react store changed : ", $store.currentStepIndex)
        if( $store.currentStepIndex === 1 ){
            changingValue = 90
        } else {
            changingValue = 45
        }

        // if( gradientWrapper ){
        //     console.log("gradientWrapper ref : ", gradientWrapper)
        // }

    }, [$store.currentStepIndex])

    // const params = {
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
    //     // fov: 45,
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

    const params = {
        animate: "on",
        axesHelper: "off",
        bgColor1: "#000000",
        bgColor2: "#000000",
        brightness: "1.1",
        cAzimuthAngle: "180",
        cDistance: "3.3",
        cPolarAngle: "90",
        cameraZoom: "9.1",
        color1: "ff52b4",
        color2: "ffbd96",
        color3: "f6eddb",
        destination: "onCanvas",
        embedMode: "off",
        // envPreset: "city",
        format: "gif",
        fov: "20",
        frameRate: "10",
        gizmoHelper: "hide",
        grain: "off",
        lightType: "3d",
        pixelDensity: "1",
        positionX: "0",
        positionY: "0.7",
        positionZ: "0",
        range: "disabled",
        rangeEnd: "40",
        rangeStart: "0",
        reflection: "0.1",
        rotationX: "50",
        rotationY: "0",
        rotationZ: "0",
        shader: "defaults",
        type: "waterPlane",
        uAmplitude: "0",
        uDensity: "2.5",
        uFrequency: "0",
        uSpeed: "0.1",
        uStrength: "1",
        uTime: "8",
        wireframe: "false",
    }

  return (
    <>
        <div className='react-canvas-wrapper'>
            <ShaderGradientCanvas
                ref={ gradientWrapper }
                importedfiber={{ ...fiber, ...drei, ...reactSpring }}
                style={{
                    position: 'absolute',
                    top: 0,
                }}
            >
                <ShaderGradient 
                    {...params} 
                    fov={changingValue}
                />
            </ShaderGradientCanvas>
        </div>
    </>
  )
}