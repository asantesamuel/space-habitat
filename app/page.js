// 'use client'
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
// import { Suspense } from 'react'

// export default function Home() {
//   return (
//     <main className="h-screen w-screen bg-gray-900 text-white flex">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-800 p-4 border-r border-gray-700">
//         <h2 className="text-lg font-semibold mb-4">Space Habitat Tool</h2>
//         <p className="text-sm text-gray-300 mb-4">
//           Design and visualize modular space habitats.
//         </p>
//         <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
//           Add Module
//         </button>
//       </div>

//       {/* 3D Scene */}
//       <div className="flex-1">
//         <Canvas shadows>
//           <Suspense fallback={null}>
//             <PerspectiveCamera makeDefault position={[3, 3, 5]} />
//             <OrbitControls enableZoom enableRotate enablePan />

//             <ambientLight intensity={0.6} />
//             <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />

//             {/* Example Habitat Module */}
//             <mesh castShadow receiveShadow>
//               <boxGeometry args={[1, 1, 1]} />
//               <meshStandardMaterial color="orange" />
//             </mesh>

//             {/* Ground */}
//             <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
//               <planeGeometry args={[10, 10]} />
//               <meshStandardMaterial color="#333" />
//             </mesh>
//           </Suspense>
//         </Canvas>
//       </div>
//     </main>
//   )
// }


'use client'
import Sidebar from './components/Sidebar'
import CanvasScene from './components/CanvasScene'
import ManualOverlay from './components/ManualOverlay'

export default function Home() {
  return (
    <main className="h-screen w-screen bg-gray-900 text-white flex">
      <Sidebar />
      <div className="flex-1">
        
        <CanvasScene />
        {/* <ManualOverlay /> */}
      </div>
    </main>
  )
}
