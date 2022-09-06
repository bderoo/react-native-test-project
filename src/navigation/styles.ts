import { StyleSheet } from 'react-native'

import { Colors, Metrics } from '@/theme'

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.backgroundGray,
  },
  headerLeftContainer: {
    borderWidth: 1,
    borderColor: Colors.accentGray2,
    height: Metrics.xxxLarge,
    width: Metrics.xxxLarge,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default styles
