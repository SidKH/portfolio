import { COLORS, MEDIA, MIXINS } from '../../../common/styles';

const styles = {
  container: {
    backgroundColor: COLORS.PURPLE
  },
  holder: {
    ...MIXINS.CONTAINER,
  },
  contentHolder: {
    ...MIXINS.FLEX_CONTAINER,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column'
  },
  heading: {
    ...MIXINS.HEADING,
    textAlign: 'center',
    fontSize: '95px',
    lineHeight: '100px'
  },
  headingWord: {
    color: COLORS.ORANGE,
    display: 'block'
  },
  info: {
    color: COLORS.AQUA,
    textTransform: 'uppercase',
    textDecoration: 'none'
  },
  [MEDIA.PHONE_PLUS_LANDSCAPE]: {
    heading: {
      fontSize: '46px',
      lineHeight: '50px'
    }
  },
  [MEDIA.PHONE_PLUS_PORTRAIT]: {
    heading: {
      fontSize: '46px',
      lineHeight: '50px'
    }
  }
}

export default styles;