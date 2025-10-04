'use client'
import useHabitatStore from '../store/habitatStore'

export default function Sidebar() {
  const { addModule, modules } = useHabitatStore()

  return (
    <div className="w-64 bg-gray-900 p-4 border-r border-gray-800 flex flex-col">
      <h2 className="text-lg font-semibold mb-4 text-white">🚀 Space Habitat Builder</h2>

      {/* Buttons to add habitat items */}
      <button
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded mb-2 text-white"
        onClick={() => addModule('chair')}
      >
        Add Habitat Chair
      </button>

      <button
        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded mb-2 text-white"
        onClick={() => addModule('table')}
      >
        Add Habitat Table
      </button>

      <button
        className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded mb-4 text-white"
        onClick={() => addModule('bed')}
      >
        Add Habitat Bed
      </button>

      {/* Sidebar list of all modules */}
      <div className="text-gray-300 text-sm flex-1 overflow-y-auto">
        <p className="font-medium mb-2">Total Modules: {modules.length}</p>
        <ul className="mt-2 space-y-1">
          {modules.map((m) => (
            <li key={m.id}>• {m.label || m.type} (ID: {m.id})</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
