import { COLORS, MEDIA, MIXINS } from '../../../common/styles';
import Me from './me.jpg';

const styles = {
  contentHolder: {
    ...MIXINS.FLEX_CONTAINER,
    overflow: 'hidden',
  },
  partA: {
    backgroundImage: `url(${Me})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    flex: 1
  },
  partB: {
    backgroundColor: COLORS.ORANGE,
    flex: 1
  },
  partC: {
    backgroundColor: COLORS.PURPLE,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  partBCHolder: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  birdsHolder: {
    height: '100%'
  },
  heading: {
    ...MIXINS.HEADING,
    fontSize: '64px',
    lineHeight: '70px',
    width: '440px'
  },
  [MEDIA.LAPTOP_AND_TABLET]: {
    heading: {
      fontSize: '60px',
      lineHeight: '66px',
      width: '410px'
    }
  },
  [MEDIA.TABLET_PORTRAIT]: {
    partA: {
      display: 'none'
    },
    heading: {
      fontSize: '64px',
      lineHeight: '70px',
      width: '440px'
    }
  },
  [MEDIA.PHONE_PLUS_PORTRAIT]: {
    heading: {
      fontSize: '36px',
      lineHeight: '40px',
      width: '250px'
    }
  },
  [MEDIA.PHONE_PLUS_LANDSCAPE]: {
    heading: {
      fontSize: '36px',
      lineHeight: '40px',
      width: '250px'
    },
    partA: {
      display: 'none'
    },
    partBCHolder: {
      flexDirection: 'row-reverse'
    },
    partB: {
      flex: '1'
    },
    partC: {
      flex: '1'
    }
  },
  [MEDIA.PHONE_PORTRAIT]: {
    heading: {
      fontSize: '32px',
      lineHeight: '36px',
      width: '226px'
    }
  },
  [MEDIA.PHONE_LANDSCAPE]: {
    heading: {
      fontSize: '28px',
      lineHeight: '32px',
      width: '194px'
    }
  },
}

export default styles;