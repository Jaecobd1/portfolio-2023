import { Canvas, useFrame } from '@react-three/fiber'
import Desk from './Desk'
import Computer from './Computer'
import { Image, PerspectiveCamera } from '@react-three/drei'
import { useRef } from 'react'
import screenShot from '/Screen.png'
import { Mesh } from 'three'
import Headphones from './Headphones'
import Book from './Book'

function HeroThreeJS({ scrollYProgress }: { scrollYProgress: number }) {
  return (
    <Canvas>
      <Scene scroll={scrollYProgress} />
    </Canvas>
  )
}

function Scene({ scroll }: { scroll: number }) {
  const cameraRef = useRef<Mesh>(null)
  const computerRef = useRef<Mesh>(null)
  useFrame(() => {
    //make the camera pan to the right as the user scrolls
    if (cameraRef.current && cameraRef.current) {
      cameraRef.current.rotation.y = -scroll * 3
      cameraRef.current.rotation.x = -0.4 + scroll
      cameraRef.current.position.x = -scroll * 150 + 10

      cameraRef.current.position.y = -scroll * 20 + 10
      cameraRef.current.position.z = scroll * 60 + 10
    }
  })
  const bookRef = useRef<Mesh>(null)
  console.log(bookRef.current)
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={window.innerWidth > 780 ? [0, 8, 30] : [0, 7, 50]}
        ref={cameraRef}
        //@ts-ignore
        lookAt={computerRef.current?.position}
      />
      <ambientLight intensity={0.7} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Image
        url={screenShot}
        position={[0, 1.5, -1.355]}
        scale={[3, 2]}
        rotation={[-0.25, 0, 0]}
      />
      <Headphones position={[-4, 0.3, 0]} rotation={[-1.5, 0, 0]} />
      <Book ref={bookRef} />
      <Computer position={[0, 0, 0]} ref={computerRef} />
      <Desk position={[0.5, -159.15, 20]} scale={5} rotation-y={-1.5} />
    </>
  )
}

export default HeroThreeJS
