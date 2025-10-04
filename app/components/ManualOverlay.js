'use client'
import React from 'react'

export default function ManualOverlay() {
  return (

 <div className='flex flex-col min-h-screen'>
       <div className="absolute top-4 left-4 bg-black/60 text-white p-4 rounded-lg text-sm max-w-xs z-50">
      <h2 className="text-lg font-semibold mb-2">🧭 Space Habitat Builder - Guide</h2>
      <ul className="space-y-1 list-disc list-inside">
        <li><strong>Left-click + drag</strong> — rotate camera</li>
        <li><strong>Right-click + drag</strong> — pan view</li>
        <li><strong>Scroll</strong> — zoom in/out</li>
        <li><strong>Add Module</strong> — use sidebar or controls</li>
        <li><strong>Click Module</strong> — remove it</li>
        <li><strong>Phase 2</strong> — measure space usage, check collisions</li>
      </ul>
    </div>
 </div>
  )
}
