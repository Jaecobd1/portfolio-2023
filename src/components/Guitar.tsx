import { useGLTF } from '@react-three/drei'
import React from 'react'

function Guitar() {
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/les-paul/model.gltf'
  )

  return <primitive object={scene} />
}

export default Guitar
