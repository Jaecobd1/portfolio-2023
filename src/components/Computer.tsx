import { useGLTF } from '@react-three/drei'

export default function Computer(props) {
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
  )
  return <primitive object={scene} {...props} />
}
