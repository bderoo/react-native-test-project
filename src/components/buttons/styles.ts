import { StyleSheet, ViewStyle } from 'react-native'

import { Colors } from '@/theme'
import { FigmaColors } from '@/theme/colors'

const baseStyles: ViewStyle = {
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderWidth: 1,
  minHeight: 43,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}

export const defaultStyles = StyleSheet.create({
  baseTextStyle: {
    textTransform: 'uppercase',
    textAlign: 'left',
  },
})

export const primaryStyles = StyleSheet.create({
  default: {
    ...baseStyles,
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
  },
  pressed: {
    ...baseStyles,
    borderColor: Colors.primary,
    backgroundColor: Colors.almostBlack,
  },
})

export const secondaryStyles = StyleSheet.create({
  default: {
    ...baseStyles,
    borderColor: Colors.accentGray,
    backgroundColor: Colors.accentGray,
  },
  pressed: {
    ...baseStyles,
    borderColor: Colors.accentGray,
    backgroundColor: Colors.almostBlack,
  },
})

export const signUpStyles = StyleSheet.create({
  default: {
    ...baseStyles,
    borderColor: Colors.accentGray,
    backgroundColor: Colors.accentGray,
    justifyContent: 'center',
  },
  pressed: {
    ...baseStyles,
    borderColor: Colors.accentGray,
    backgroundColor: Colors.almostBlack,
    justifyContent: 'center',
  },
  text: {
    textTransform: 'none',
    color: Colors.white,
  },
  pressedText: {
    textTransform: 'none',
    color: Colors.primary,
  },
})

export const whiteBorderStyles = StyleSheet.create({
  default: {
    ...baseStyles,
    borderColor: Colors.white,
    backgroundColor: Colors.backgroundGray,
    borderRadius: 2,
    justifyContent: 'center',
    flex: 1,
  },
  pressed: {
    ...baseStyles,
    borderColor: Colors.white,
    backgroundColor: Colors.backgroundGray,
    borderRadius: 2,
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    color: Colors.white,
    textTransform: 'none',
    textAlign: 'center',
  },
  pressedText: {
    color: Colors.white,
    textTransform: 'none',
    textAlign: 'center',
  },
})

export const secondaryArrowButtonStyles = StyleSheet.create({
  pressed: {
    ...baseStyles,
    borderColor: FigmaColors.grey750,
    backgroundColor: FigmaColors.grey750,
  },
  default: {
    ...baseStyles,
    borderColor: FigmaColors.grey750,
    backgroundColor: FigmaColors.grey750,
  },
})
