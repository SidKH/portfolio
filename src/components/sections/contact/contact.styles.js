import { COLORS, MEDIA, MIXINS, AnimationSequence } from '../../../common/styles';

const styles = {
  contentHolder: {
    ...MIXINS.FLEX_CONTAINER,
    overflow: 'hidden',
  },
  partA: {
    flex: '1',
    backgroundColor: COLORS.ORANGE,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  partB: {
    flex: '1',
    backgroundColor: COLORS.WHITE,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    ...MIXINS.HEADING,
    textAlign: 'center',
    fontSize: '56px',
    lineHeight: '60px',
  },
  headingWord: {
    display: 'block',
    color: COLORS.PURPLE
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '392px'
  },
  iconLink: {
    ...AnimationSequence(0.4, 0.4),
    display: 'block',
    height: '80px',
    '&:hover': {
      opacity: '0.8'
    },
    '&:active': {
      opacity: '0.6'
    },
    '& img': {
      height: '100%',
      display: 'block'
    }
  },
  [MEDIA.LAPTOP_AND_TABLET]: {
    icons: {
      width: '360px'
    }
  },
  [MEDIA.TABLET_PORTRAIT]: {
    contentHolder: {
      flexDirection: 'column'
    }
  },
  [MEDIA.PHONE_PLUS_PORTRAIT]: {
    icons: {
      width: '100%',
      justifyContent: 'space-evenly'
    },
    iconLink: {
      height: '70px'
    }
  },
  [MEDIA.PHONE_PLUS_LANDSCAPE]: {
    heading: {
      fontSize: '48px',
      lineHeight: '52px'
    },
    icons: {
      width: '100%',
      justifyContent: 'space-evenly'
    },
    iconLink: {
      height: '60px'
    }
  },
  [MEDIA.PHONE_PORTRAIT]: {
    iconLink: {
      height: '65px'
    }
  },
  [MEDIA.PHONE_LANDSCAPE]: {
    heading: {
      fontSize: '46px',
      lineHeight: '50px'
    },
    iconLink: {
      height: '55px'
    }
  }
}

export default styles;