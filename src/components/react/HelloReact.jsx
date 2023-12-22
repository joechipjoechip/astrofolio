import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'

export default function HelloReact() {

    const params = {
        brightness: 1.1,
        cAzimuthAngle: 180,
        cDistance: 3.9,
        cPolarAngle: 115,
        cameraZoom: 1,
        color1: "5606FF",
        color2: "FE8989",
        color3: "000000",
        destination: "onCanvas",
        embedMode: "off",
        envPreset: "city",
        format: "gif",
        fov: 45,
        frameRate: 10,
        grain: "off",
        lightType: "3d",
        pixelDensity: 1,
        positionX: -0.5,
        positionY: 0.1,
        positionZ: 0,
        range: "enabled",
        rangeEnd: 40,
        rangeStart: 0,
        reflection: 0.1,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 235,
        shader: "defaults",
        type: "waterPlane",
        uAmplitude: 0,
        uDensity: 2.1,
        uFrequency: 5.5,
        uSpeed: 0.1,
        uStrength: 1.1,
        uTime: 0.2,
        wireframe: false,
    }

  return (
    <ShaderGradientCanvas
      importedfiber={{ ...fiber, ...drei, ...reactSpring }}
      style={{
        position: 'absolute',
        top: 0,
      }}
    >
      <ShaderGradient {...params} />
    </ShaderGradientCanvas>
  )
}