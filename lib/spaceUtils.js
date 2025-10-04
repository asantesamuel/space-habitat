// lib/spaceUtils.js

export function calculateSpaceUsage(modules) {
  const unitVolume = 10 // assume each module ~10 cubic meters
  return modules.length * unitVolume
}

export function calculateOccupiedArea(modules) {
  return modules.length * 4 // each takes 4 m² as a rough estimate
}
