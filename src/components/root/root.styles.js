import { FONTS } from '../../common/styles';

/**
 * Global styles for the app
 * @type {Object}
 */
const styles = {
  '@global': {
    'body, html, #root': {
      height: '100%',
      margin: 0
    },
    'body': {
      fontFamily: FONTS.PRIMARY,
      fontSize: '14px'
    },
    '*': {
      '-webkit-tap-highlight-color': 'rgba(0,0,0,0)'
    }
  }
}

export default styles;