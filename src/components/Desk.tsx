import { useGLTF } from '@react-three/drei'

export default function Desk(props) {
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/desk/model.gltf'
  )
  return <primitive object={scene} {...props} />
}
