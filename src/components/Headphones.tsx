import { useGLTF } from '@react-three/drei'

// @ts-ignore
export default function Headphones(props) {
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/headphones/model.gltf'
  )
  return <primitive object={scene} {...props} />
}
