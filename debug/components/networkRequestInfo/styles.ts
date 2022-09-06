import { StyleSheet } from 'react-native'

import { Colors, FontFamilies } from '@/theme'

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.almostBlack,
  },
  headerWrapper: {
    flexDirection: 'row',
  },
  headerTitle: {
    fontFamily: FontFamilies.bold,
  },
})

export default styles
