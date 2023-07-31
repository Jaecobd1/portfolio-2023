import { useGLTF } from '@react-three/drei'

function Guitar() {
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/les-paul/model.gltf'
  )

  return <primitive object={scene} />
}

export default Guitar
