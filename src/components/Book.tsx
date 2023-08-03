import { useGLTF } from '@react-three/drei'
//@ts-ignore
export default function Book(props) {
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/book/model.gltf'
  )
  return <primitive object={scene} {...props} />
}
