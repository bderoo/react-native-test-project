import { StyleSheet } from 'react-native'

import { Colors, Metrics } from '@/theme'

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.primary,
    borderWidth: 1,
    paddingVertical: Metrics.small,
    paddingHorizontal: Metrics.medium,
  },
  bottomContainer: {
    borderColor: Colors.primary,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: Metrics.small,
    paddingHorizontal: Metrics.medium,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  customContentContainer: {
    width: '100%',
  },
  arrowButtonContainer: {
    justifyContent: 'center',
  },
})

export default styles
