import { COLORS } from '../../common/styles';

/**
 * Generating animation delay for sequenced animation of letters
 * @param  {Number} n       - number of iterations
 * @param  {Number} initial - initial number of the delay of first item
 * @param  {Number} step    - one step for gradually increasing animation delay
 * @return {Object}         - object with rules
 */
const generateAnimationDelay = (n = 10, initial = 0.5, step = 0.2) => {
  let rules = {};
  for (let i = 0; i < n; i++) {
    const prop = {animationDelay: `${initial + (step * i)}s`}
    rules[`&:nth-child(${i + 1}):after`] = {...prop};
    rules[`&:nth-child(${i + 1}):before`] = {...prop};
  }
  return rules;
}

const letterElementsStyle = {
  display: 'block',
  position: 'absolute',
  content: 'attr(data-text)',
  top: '0',
  left: '-1px',
  transformOrigin: 'left top',
  transition: 'all ease-out 0.3s',
  animationDuration: '1.5s',
  animationTimingFunction: 'ease-out'
}


const styles = {
  '@keyframes fold': {
    '0': {transform: 'rotateY(-40deg)'},
    '30%': {transform: 'rotateY(-10deg)'},
    '70%': {transform: 'rotateY(-10deg)'},
    '100%': {transform: 'rotateY(-40deg)'},
  },
  '@keyframes shadowMove': {
    '0': {transform: 'scale(1.1, 1) skew(0deg, 20deg)'},
    '30%': {transform: 'scale(1.1, 1) skew(0deg, 5deg)'},
    '70%': {transform: 'scale(1.1, 1) skew(0deg, 5deg)'},
    '100%': {transform: 'scale(1.1, 1) skew(0deg, 20deg)'}
  },
  container: {
    '& > span > span': {
      color: COLORS.WHITE,
      '-webkit-perspective': '500',
      transformStyle: 'preserve-3d',
      display: 'inline-block',
      position: 'relative',
      '&:after': {
        ...letterElementsStyle,
        color: COLORS.ORANGE,
        zIndex: '2',
        transform: 'rotateY(-40deg)',
        animation: 'fold'
      },
      '&:before': {
        ...letterElementsStyle,
        color: 'rgba(0,0,0,0.2)',
        zIndex: '1',
        transform: 'scale(1.1, 1) skew(0deg, 20deg)',
        animation: 'shadowMove'
      },
      '&:hover:after': {
        transform: 'rotateY(-10deg)'
      },
      '&:hover:before': {
        transform: 'scale(1.1, 1) skew(0deg, 5deg)'
      },
      ...generateAnimationDelay()
    }
  }
}

export default styles;