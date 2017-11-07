/**
 * Complete list of Application colors
 * @type {Object}
 */
const COLORS = {
  WHITE: '#FFFFFF',
  PURPLE: '#352245',
  ORANGE: '#F86942',
  AQUA: '#3FB9BD',
  AQUA_LIGHT: '#0CC4CC'
}

/**
 * List of media queries for different devices
 * @type {Object}
 */
const MEDIA = {
  LAPTOP_AND_TABLET: '@media (max-width: 1279px)',
  TABLET_PORTRAIT: '@media (max-width: 1023px) and (orientation: portrait)',
  PHONE_PLUS_LANDSCAPE: '@media (max-width: 778px) and (orientation: landscape)',
  PHONE_PLUS_PORTRAIT: '@media (max-width: 767px) and (orientation: portrait)',
  PHONE_LANDSCAPE: '@media (max-width: 735px) and (orientation: landscape)',
  PHONE_PORTRAIT: '@media (max-width: 413px) and (orientation: portrait)'
}

/**
 * List of default Fonts of App
 * @type {Object}
 */
const FONTS = {
  PRIMARY: 'Open-sans, sans-serif',
  SECONDARY: 'Raleway, sans-serif'
}

/**
 * List of Mixins to reuse with JSS
 * @type {Object}
 */
const MIXINS = {
  CONTAINER: {
    width: '100%',
    height: '100%',
  },
  FLEX_CONTAINER: {
    width: '100%',
    height: '100%',
    display: 'flex'
  },
  HEADING: {
    fontWeight: '900',
    margin: '0',
    padding: '0',
    textTransform: 'uppercase',
    fontFamily: FONTS.SECONDARY,
    color: COLORS.WHITE
  }
}

/**
 * Create a sequence of animation delays
 *   to provde smooth appearance of the elements
 * @param  {Number} start - Delay of the first element
 * @param  {Number} step  - Step of delay
 * @param  {Number} items - Number of items to apply rule
 * @return {Object}       - Object with JSS rule
 */
const AnimationSequence = (start, step, items = 3) => {
  let Rule = {};
  for (let i = 0; i < items; i++) {
    Rule[`&:nth-child(${i + 1})`] = {
      animationDelay: `${start + (step * i)}s`
    }
  }
  return Rule;
}

export { COLORS, MEDIA, FONTS, MIXINS, AnimationSequence }