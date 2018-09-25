/**
 * Define theme for Flexbox
 * Andy Ng
 * 2018-09-19 15:59:31
 */

const FlexBox = {
  flexible: {
    display: 'flex',
  },
  unflexible: {
    flex: 'unset',
  },
  vertical: {
    flexDirection: 'column',
  },
  horizontal: {
    flexDirection: 'row',
  },
  'space-between': {
    justifyContent: 'space-between',
  },
  'h-center': {
    justifyContent: 'center',
  },
  'h-end': {
    justifyContent: 'flex-end',
  },
  'h-start': {
    justifyContent: 'flex-start',
  },
  'v-center': {
    alignItems: 'center',
  },
}

export default FlexBox
