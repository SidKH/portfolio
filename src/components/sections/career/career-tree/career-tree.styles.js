import { COLORS, MEDIA, MIXINS, AnimationSequence } from '../../../../common/styles';

const point = {
  content: '""',
  position: 'absolute',
  top: '-14px',
  borderRadius: '100%',
  backgroundColor: COLORS.WHITE
}

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    color: COLORS.WHITE,
    textTransform: 'uppercase',
    height: '100%',
    alignItems: 'center',
    '&:after': {
      content: '""',
      position: 'absolute',
      left: '50%',
      top: '0',
      bottom: '0',
      width: '8px',
      margin: '0 0 0 -4px',
      backgroundColor: COLORS.WHITE
    }
  },
  holder: {
    display: 'flex',
    width: '560px',
    margin: '100px 0 0',
    flexDirection: 'column-reverse'
  },
  axis: {
    backgroundColor: COLORS.WHITE,
    height: '100%',
    width: 8
  },
  position: {
    ...AnimationSequence(1, 0.5, 4),
    fontSize: '24px',
    lineHeight: '30px',
    animationDuration: '0.4s',
    position: 'relative',
    zIndex: '100',
    display: 'flex',
    textAlign: 'right',
    margin: '-10px 0 0',
    '& a > span:first-child': {
      padding: '0 18px 15px 0'
    },
    '& a > span:last-child': {
      padding: '4px 18px 0',
      '&:after': {
        ...point,
        right: '-11px',
        width: '23px',
        height: '23px'
      }
    },
    '&:nth-child(even)': {
      justifyContent: 'flex-end',
      '& div': {
        justifyContent: 'flex-start',
        textAlign: 'left',
        '& a > span:first-child': {
          padding: '0 0 15px 18px',
          '&:after': {
            left: '0'
          }
        },
        '& a > span:last-child': {
          padding: '4px 0 0 18px',
          '&:after': {
            ...point,
            right: 'auto',
            left: '-11px',
            width: '23px',
            height: '23px'
          }
        },
      }
    }
  },
  positionHolder: {
    flex: '0.5',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  positionInfo: {
    display: 'block',
    position: 'relative',
    color: COLORS.WHITE,
    '&:after': {
      content: '""',
      display: 'block',
      height: 4,
      width: '100%',
      backgroundColor: COLORS.WHITE,
      position: 'absolute',
      bottom: 0
    }
  },
  company: {
    color: COLORS.PURPLE,
    display: 'block'
  },
  positionYear: {
    ...MIXINS.HEADING,
    fontSize: '46px',
    lineHeight: '48px',
    display: 'block',
    position: 'relative'
  },
  positionLink: {
    textDecoration: 'none',
    display: 'block'
  },
  [MEDIA.TABLET_PORTRAIT]: {
    holder: {
      margin: '0'
    }
  },
  [MEDIA.PHONE_PLUS_PORTRAIT]: {
    position: {
      fontSize: '18px',
      lineHeight: '20px',
      '& a > span:last-child': {
        fontSize: '32px',
        lineHeight: '34px'
      },
      margin: '0',
    }
  },
  [MEDIA.PHONE_PLUS_LANDSCAPE]: {
    container: {
      flexDirection: 'column',
      width: '100%',
      '&:after': {
        width: '100%',
        height: '8px',
        left: '0',
        top: '50%',
        bottom: 'auto',
        margin: '-4px 0 0'
      }
    },
    holder: {
      width: 'auto',
      margin: '0',
      flexDirection: 'row',
      flex: '1'
    },
    position: {
      margin: '0 -70px 0 0',
      flexDirection: 'column',
      '&:last-child': {
        margin: '0'
      },
      '& a': {
        display: 'flex',
        flexDirection: 'row-reverse',
        '& > span:first-child': {
          fontSize: '16px',
          lineHeight: '20px',
          padding: '0 0 15px 17px',
          textAlign: 'left',
          '&:after': {
            left: '0',
            width: '4px',
            height: '100%'
          }
        },
        '& > span:last-child': {
          padding: '0 15px 12px 0',
          '&:after': {
            top: 'auto',
            bottom: '-11px',
            right: '-13px'
          }
        },
      },
      '&:nth-child(even)': {
        '& > div': {
          alignItems: 'flex-start',
          '& > a': {
            alignItems: 'flex-start',
            '& > span:first-child': {
              padding: '15px 0 0 15px'
            },
            '& > span:last-child': {
              padding: '8px 15px 0 0',
              '&:after': {
                top: '-13px',
                right: '-13px',
                left: 'auto'
              }
            }
          }
        }
      }
    },
    positionHolder: {
      alignItems: 'flex-end',
      justifyContent: 'flex-start'
    },
    positionYear: {
      fontSize: '32px',
      lineHeight: '36px',
      display: 'flex',
      alignItems: 'flex-end'
    }
    
  },
  [MEDIA.PHONE_PORTRAIT]: {
    position: {
      margin: '-25px 0 0',
    }
  },
  [MEDIA.PHONE_LANDSCAPE]: {
    positionYear: {
      fontSize: '28px',
      lineHeight: '32px'
    },
    position: {
      '& a span:first-child': {
        fontSize: '15px',
        lineHeight: '19px'
      }
    }
  }
}

export default styles;