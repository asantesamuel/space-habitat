'use client'
import { useRef, useState } from 'react'
import { useGLTF, TransformControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function HabitatModule({ id, type, position, rotation, onClick, orbitRef }) {
  const group = useRef()
  const [active, setActive] = useState(false)

  // Choose correct model path
  let modelPath = '/models/habitat_chair.glb'
  if (type === 'table') modelPath = '/models/habitat_table.glb'
  else if (type === 'bed') modelPath = '/models/habitat_bed.glb'

  const { scene } = useGLTF(modelPath)

  // Disable OrbitControls when dragging
  const handleDragStart = () => {
    setActive(true)
    if (orbitRef?.current) orbitRef.current.enabled = false
  }

  const handleDragEnd = () => {
    setActive(false)
    if (orbitRef?.current) orbitRef.current.enabled = true
  }

  // Gentle rotation when idle
//   useFrame(() => {
//     if (!active && group.current) group.current.rotation.y += 0.002
//   })

  return (
    <TransformControls
      object={group}
      mode="translate"
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      showX
      showY
      showZ
    >
      <group
        ref={group}
        position={position}
        rotation={rotation}
        scale={1.2}
        onDoubleClick={() => onClick(id)} // double-click to delete
      >
        <primitive object={scene} />
      </group>
    </TransformControls>
  )
}
