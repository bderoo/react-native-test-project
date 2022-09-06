import { StyleSheet } from 'react-native'

import { Colors, colorWithOpacity } from '@/theme'

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  transparentBackground: {
    backgroundColor: colorWithOpacity(Colors.backgroundGray, 0.5),
  },
  solidBackground: {
    backgroundColor: Colors.backgroundGray,
  },
})

export default styles
