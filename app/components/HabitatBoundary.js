'use client'
import { Box } from '@react-three/drei'

export default function HabitatBoundary() {
  return (
    <>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      {/* Four boundary walls */}
      <Box args={[10, 3, 0.1]} position={[0, 1.5, -5]}>
        <meshStandardMaterial color="gray" opacity={0.25} transparent />
      </Box>
      <Box args={[10, 3, 0.1]} position={[0, 1.5, 5]}>
        <meshStandardMaterial color="gray" opacity={0.25} transparent />
      </Box>
      <Box args={[0.1, 3, 10]} position={[-5, 1.5, 0]}>
        <meshStandardMaterial color="gray" opacity={0.25} transparent />
      </Box>
      <Box args={[0.1, 3, 10]} position={[5, 1.5, 0]}>
        <meshStandardMaterial color="gray" opacity={0.25} transparent />
      </Box>
    </>
  )
}
