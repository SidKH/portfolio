import { COLORS, MEDIA, MIXINS } from '../../../common/styles';

const styles = {
  container: {
    ...MIXINS.CONTAINER,
    backgroundColor: COLORS.PURPLE
  },
  holder: {
    ...MIXINS.CONTAINER,
  },
  contentHolder: {
    ...MIXINS.FLEX_CONTAINER,
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    animationDuration: '2s'
  },
  heading: {
    ...MIXINS.HEADING,
    fontSize: '95px',
    lineHeight: '100px',
  },
  headingWord: {
    color: COLORS.ORANGE
  },
  info: {
    color: COLORS.AQUA,
    textTransform: 'uppercase'
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