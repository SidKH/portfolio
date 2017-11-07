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
    }
  }
}

export default styles;