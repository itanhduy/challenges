import { camelCase } from 'lodash'

/**
 * Gutter direction to create left, right, top, bottom syling properties
 */
const GuttersDirection = ['left', 'right', 'top', 'bottom']

/**
 * The base gutter values
 */
const BaseGutters = {
  'sm-gutter': 5,
  'md-gutter': 15,
  'lg-gutter': 30,
  'xl-gutter': 45,
}

/**
 *
 * @param {String} name The name of gutters
 * @return {{"name-*": Number}} The object with left, right, top, bottom styling and the value will be inside `Gutters` according to the name
 */
const GuttersSpecific = name => {
  const specificObject = {}
  GuttersDirection.forEach(direction => {
    const propName = `${name}-${direction}`
    specificObject[propName] = {
      [camelCase(`padding ${direction}`)]: `${BaseGutters[name]}px`,
    }
  })
  return {
    [name]: {
      padding: `${BaseGutters[name]}px`,
    },
    ...specificObject,
  }
}

const Gutters = {
  ...GuttersSpecific('sm-gutter'),
  ...GuttersSpecific('md-gutter'),
  ...GuttersSpecific('lg-gutter'),
  ...GuttersSpecific('xl-gutter'),
}

export default Gutters
export { GuttersDirection, GuttersSpecific }
