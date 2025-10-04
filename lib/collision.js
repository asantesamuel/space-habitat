// lib/collision.js

export function detectCollisions(modules) {
  const collisions = []

  for (let i = 0; i < modules.length; i++) {
    for (let j = i + 1; j < modules.length; j++) {
      const a = modules[i]
      const b = modules[j]

      // Define simple bounding boxes for each module
      const boxA = {
        min: {
          x: a.position[0] - 0.5,
          y: a.position[1] - 0.5,
          z: a.position[2] - 0.5,
        },
        max: {
          x: a.position[0] + 0.5,
          y: a.position[1] + 0.5,
          z: a.position[2] + 0.5,
        },
      }

      const boxB = {
        min: {
          x: b.position[0] - 0.5,
          y: b.position[1] - 0.5,
          z: b.position[2] - 0.5,
        },
        max: {
          x: b.position[0] + 0.5,
          y: b.position[1] + 0.5,
          z: b.position[2] + 0.5,
        },
      }

      // Check for overlap
      const isColliding =
        boxA.min.x <= boxB.max.x &&
        boxA.max.x >= boxB.min.x &&
        boxA.min.y <= boxB.max.y &&
        boxA.max.y >= boxB.min.y &&
        boxA.min.z <= boxB.max.z &&
        boxA.max.z >= boxB.min.z

      if (isColliding) {
        collisions.push([a.id, b.id])
      }
    }
  }

  return collisions
}
