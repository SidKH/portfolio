import { COLORS, MIXINS } from '../../../../common/styles';

const styles = {
  container: {
    ...MIXINS.CONTAINER,
    position: 'relative'
  },
  birdsHolder: {
    ...MIXINS.CONTAINER,
    '& canvas': {
      display: 'block'
    }
  },
  mask: {
    ...MIXINS.CONTAINER,
    backgroundColor: COLORS.ORANGE,
    position: 'absolute',
    left: '0',
    top: '0',
    zIndex: '10'
  }
};

export default styles;