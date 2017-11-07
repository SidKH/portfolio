import { COLORS, MIXINS } from '../../common/styles';

const styles = {
  container: {
    height: '100%',
    textAlign: 'center',
    backgroundColor: COLORS.PURPLE
  },
  section: {
    height: '33.333%',
    display: 'table',
    width: '100%'
  },
  holder: {
    display: 'table-cell',
    verticalAlign: 'middle',
    width: '100%'
  },
  ie: {
    color: COLORS.ORANGE
  },
  heading: {
    ...MIXINS.HEADING,
    fontSize: '95px',
    lineHeight: '100px'
  },
  info: {
    color: COLORS.AQUA,
    textTransform: 'uppercase',
    lineHeight: '18px'
  }
};

export default styles;