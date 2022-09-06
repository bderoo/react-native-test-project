import styled from '@emotion/native'
import { StyleSheet } from 'react-native'

import { Colors, Metrics } from '@/theme'

export const LevelView = styled.View(({ level }: { level: 'warn' | 'error' }) => {
  let backgroundColor = Colors.backgroundGray
  if (level === 'warn') {
    backgroundColor = Colors.warning
  } else if (level === 'error') {
    backgroundColor = Colors.error
  }
  return {
    padding: 8,
    backgroundColor,
    borderBottomWidth: 1,
  }
})

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
  },
  header: {
    alignSelf: 'center',
    marginVertical: Metrics.large,
  },
  xImage: {
    position: 'absolute',
    right: 0,
    backgroundColor: Colors.white,
  },
  infoView: {
    marginBottom: Metrics.large,
  },
  actionView: {
    flex: 1,
    marginBottom: Metrics.large,
    paddingBottom: Metrics.large,
  },
  actionItem: {
    paddingVertical: Metrics.small,
  },
  box: {
    height: Metrics.xxxLarge,
    paddingHorizontal: Metrics.xxxSmall,
    color: Colors.almostBlack,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
})

export default styles
