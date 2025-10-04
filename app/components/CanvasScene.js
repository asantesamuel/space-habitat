'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import useHabitatStore from '../store/habitatStore'
import HabitatModule from './HabitatModule'
import HabitatBoundary from './HabitatBoundary'
import { detectCollisions } from '../../lib/collision'
import { calculateSpaceUsage } from '../../lib/spaceUtils'
import { missionPresets } from '../../lib/presets'

export default function CanvasScene() {
  const orbitRef = useRef()
  const { modules, setModules, removeModule } = useHabitatStore()

  const collisions = detectCollisions(modules)
  const spaceUsed = calculateSpaceUsage(modules)

  return (
    <div className="relative w-full h-screen">
      <Canvas shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[5, 4, 8]} />
          <OrbitControls ref={orbitRef} enableZoom enableRotate enablePan />
          
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />

          {/* Environment (skybox/interior HDR) */}
          <Environment files="/environments/spaceship_interior.hdr" background blur={0.4} />
       
          {/* The “walls” of your limited environment */}
          <HabitatBoundary />

          {/* Render all modules */}
          {modules.map((m) => (
            <HabitatModule key={m.id} {...m} onClick={removeModule} orbitRef={orbitRef} />
        ))}

        </Suspense>
      </Canvas>

      {/* 🧭 On-screen dashboard */}
      <div className="absolute top-4 right-4 bg-black/70 text-white p-4 rounded-lg text-sm">
        <h2 className="font-semibold mb-2">Habitat Metrics</h2>
        <p>Modules: {modules.length}</p>
        <p>Space Usage: {spaceUsed} m³</p>
        <p>Collisions: {collisions.length}</p>

        <div className="mt-3 space-x-2">
          <button
            onClick={() => setModules(missionPresets.twoPerson)}
            className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded"
          >
            2-Person
          </button>
          <button
            onClick={() => setModules(missionPresets.fourPerson)}
            className="bg-green-500 hover:bg-green-600 px-2 py-1 rounded"
          >
            4-Person
          </button>
        </div>
      </div>
    </div>
  )
}
