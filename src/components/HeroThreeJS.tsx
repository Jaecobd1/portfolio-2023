import { Canvas } from '@react-three/fiber'
import Desk from './Desk'
import Computer from './Computer'
import { Image, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useRef } from 'react'
import screenShot from '/Screen.png'

function HeroThreeJS() {
  const cameraRef = useRef(null)

  return (
    <Canvas>
      <PerspectiveCamera
        makeDefault
        position={window.innerWidth > 780 ? [0, 5, 30] : [0, 5, 50]}
        ref={cameraRef}
      />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Image
        url={screenShot}
        position={[0, 1.5, -1.355]}
        scale={[3, 2]}
        rotation={[-0.25, 0, 0]}
      />
      <Computer />
      <Desk position={[0.5, -159.15, 20]} scale={5} rotation-y={-1.5} />
    </Canvas>
  )
}

export default HeroThreeJS
