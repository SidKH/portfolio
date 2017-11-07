import { COLORS, MEDIA, MIXINS } from '../../../common/styles';

const styles = {
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: COLORS.ORANGE
  },
  holder: {
    ...MIXINS.FLEX_CONTAINER
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
    fontSize: '56px',
    lineHeight: '56px',
    position: 'absolute',
    left: '40px',
    top: '40px',
    animationDuration: '1s'
  },
  headingWord: {
    display: 'block',
    color: COLORS.PURPLE
  },
  [MEDIA.LAPTOP_AND_TABLET]: {
    heading: {
      fontSize: '42px',
      lineHeight: '46px'
    }
  },
  [MEDIA.TABLET_PORTRAIT]: {
    heading: {
      position: 'static',
      textAlign: 'center',
      padding: '40px 0'
    }
  },
  [MEDIA.PHONE_PLUS_LANDSCAPE]: {
    contentHolder: {
      alignItems: 'flex-start'
    },
    heading: {
      position: 'static',
      fontSize: '46px',
      lineHeight: '50px',
      padding: '30px 0 0 30px'
    }
  }
}

export default styles;