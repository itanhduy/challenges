import * as listAnimations from 'react-animations'
import { keyframes } from 'styled-components'

/**
 * Create animation object for reusing
 * @param {Number} time The animation time by second
 * @return {Array<Object>} An array of animation.Can use by calling name with styleName
 */
const createAnimation = time => {
  const animations = {}
  for (let animation in listAnimations) {
    const getAnimation = listAnimations[animation]
    if (Object.is(typeof getAnimation, 'object')) {
      const createKeyframes = keyframes`${getAnimation}`
      animations[animation] = {
        animation: `${time}s ${createKeyframes}`,
      }
    }
  }
  return animations
}

const Animation = createAnimation(1)
export default Animation
