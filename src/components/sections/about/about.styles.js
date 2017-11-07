import { COLORS, MEDIA, MIXINS, AnimationSequence } from '../../../common/styles';

const styles = {
  container: {
    ...MIXINS.CONTAINER
  },
  holder: {
    ...MIXINS.FLEX_CONTAINER
  },
  heading: {
    ...MIXINS.HEADING,
    fontSize: '56px',
    lineHeight: '60px',
    padding: '0 80px 0 0',
    textAlign: 'right'
  },
  headingWord: {
    color: COLORS.PURPLE,
    display: 'block'
  },
  partA: {
    backgroundColor: COLORS.AQUA_LIGHT,
    width: '50%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  partB: {
    backgroundColor: COLORS.PURPLE,
    width: '50%',
    display: 'flex',
    alignItems: 'center'
  },
  listItem: {
    ...AnimationSequence(0.6, 0.4),
    ...MIXINS.HEADING,
    display: 'flex',
    fontSize: '25px',
    position: 'relative',
    padding: '0 0 0 100px',
    '& div span': {
      display: 'block'
    }
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    height: '320px',
    justifyContent: 'space-between',
    margin: '0 0 0 80px'
  },
  listIcon: {
    position: 'absolute',
    left: '0',
    top: '6px',
    height: '50px'
  },
  [MEDIA.LAPTOP_AND_TABLET]: {
    heading: {
      fontSize: '52px',
      lineHeight: '58px',
      padding: '0 50px 0 0'
    },
    list: {
      margin: '0 0 0 50px'
    },
    listItem: {
      padding: '0 0 0 90px'
    }
  },
  [MEDIA.TABLET_PORTRAIT]: {
    holder: {
      flexDirection: 'column'
    },
    partA: {
      flex: '1',
      width: '100%',
      justifyContent: 'center'
    },
    partB: {
      flex: '1',
      width: '100%',
      justifyContent: 'center'
    },
    heading: {
      textAlign: 'center',
      padding: '0'
    }
  },
  [MEDIA.PHONE_PLUS_PORTRAIT]: {
    heading: {
      fontSize: '40px',
      lineHeight: '44px'
    },
    listItem: {
      fontSize: '18px',
      lineHeight: '22px',
      padding: '0 0 0 70px'
    },
    list: {
      height: '100%',
      justifyContent: 'space-evenly',
      margin: '0'
    },
    listIcon: {
      height: '44px'
    }
  },
  [MEDIA.PHONE_PLUS_LANDSCAPE]: {
    heading: {
      fontSize: '38px',
      lineHeight: '42px',
      padding: '0 40px 0 0'
    },
    list: {
      height: '100%',
      justifyContent: 'space-evenly',
    },
    listItem: {
      fontSize: '16px',
      lineHeight: '20px',
      padding: '0 0 0 65px'
    },
    listIcon: {
      height: '40px'
    }
  },
  [MEDIA.PHONE_PORTRAIT]: {
    heading: {
      fontSize: '38px',
      lineHeight: '42px'
    },
    listItem: {
      fontSize: '16px',
      lineHeight: '20px',
    },
    listIcon: {
      height: '40px'
    }
  },
  [MEDIA.PHONE_LANDSCAPE]: {
    heading: {
      fontSize: '34px',
      lineHeight: '38px'
    },
    listItem: {
      fontSize: '14px',
      lineHeight: '16px',
      padding: '0 0 0 60px'
    },
    list: {
      height: '200px',
      justifyContent: 'space-between'
    },
    listIcon: {
      height: '32px'
    }
  }
}

export default styles;