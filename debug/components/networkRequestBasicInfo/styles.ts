import { FontWeight } from '@theme/fonts'
import { StyleSheet } from 'react-native'

import { Colors, FontSize, Metrics } from '@/theme'

const styles = StyleSheet.create({
  horizontalContent: {
    flexDirection: 'row',
  },
  verticalContent: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
  },
  paddingRight: {
    paddingRight: Metrics.xSmall,
  },
  method: {
    fontWeight: FontWeight.bold,
  },
  statusWrapper: {
    borderWidth: 1,
    borderColor: Colors.error,
    borderRadius: 10,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',

  },
  statusText: {
    fontSize: FontSize.small,
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginRight: Metrics.xSmall,
    minWidth: 56,
  },
})

export default styles
