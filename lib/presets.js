// lib/presets.js

export const missionPresets = {
  twoPerson: [
    { id: '1', type: 'cylinder', position: [0, 0, 0], rotation: [0, 0, 0] },
    { id: '2', type: 'lab', position: [2, 0, 0], rotation: [0, 0, 0] },
    { id: '3', type: 'connector', position: [1, 0, -2], rotation: [0, 0, 0] },
  ],
  fourPerson: [
    { id: '1', type: 'cylinder', position: [0, 0, 0], rotation: [0, 0, 0] },
    { id: '2', type: 'lab', position: [2, 0, 0], rotation: [0, 0, 0] },
    { id: '3', type: 'connector', position: [4, 0, 0], rotation: [0, 0, 0] },
    { id: '4', type: 'cylinder', position: [1, 0, -2], rotation: [0, 0, 0] },
    { id: '5', type: 'lab', position: [3, 0, -2], rotation: [0, 0, 0] },
  ],
}
