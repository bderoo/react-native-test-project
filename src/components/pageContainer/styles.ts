import styled from '@emotion/native'
import { StyleSheet } from 'react-native'

import { Colors, Metrics } from '@/theme'

export const StyledSafeAreaView = styled.SafeAreaView(({ center }: { center: boolean | undefined }) => ({
  flex: 1,
  justifyContent: center ? 'center' : undefined,
  backgroundColor: Colors.backgroundGray,
}))

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: Metrics.small,
    paddingVertical: Metrics.small,
    minHeight: Metrics.safeViewContainerHeight - 56,
  },
  errorContainer: {
    backgroundColor: Colors.error,
    width: Metrics.screenWidth,
    paddingVertical: Metrics.small,
    position: 'absolute',
    zIndex: 2,
  },
  errorText: {
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  spinner: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    elevation: 10,
  },
})

export default styles
