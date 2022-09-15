import { StyleSheet } from 'react-native'

import Colors from './colors'
import { tabletOrPhone } from './metrics'

export type FontWeightT = '300' | '400' | '500' | '600' | '700'

export const FontFamilies = {
  italic: 'Poppins-Italic',
  black: 'Poppins-Black', // 900
  extraBold: 'Poppins-ExtraBold', // 800
  bold: 'Poppins-Bold', // 700
  semi: 'Poppins-SemiBold', // 600
  medium: 'Poppins-Medium', // 500
  regular: 'Poppins-Regular', // 400
  light: 'Poppins-Light', // 300
  extraLight: 'Poppins-ExtraLight', // 200
  thin: 'Poppins-Thin', // 100
}
export const FontSize = {
  h1: tabletOrPhone(36, 36),
  h2: tabletOrPhone(24, 24),
  h3: tabletOrPhone(16, 16),
  h4: tabletOrPhone(16, 16),
  body: tabletOrPhone(14, 14),
  span: tabletOrPhone(14, 14),
  label: tabletOrPhone(12, 12),
  small: tabletOrPhone(12, 12),
}

export const LineHeight = {
  h1: (fontSize = FontSize.h1): number => fontSize * 1.1,
  h2: (fontSize = FontSize.h2): number => fontSize * 1.18,
  h3: (fontSize = FontSize.h3): number => fontSize * 1.2965,
  h4: (fontSize = FontSize.h4): number => fontSize * 1.4,
  body: (fontSize = FontSize.body): number => fontSize * 1.5,
  span: (fontSize = FontSize.span): number => fontSize * 1.5714,
  small: (fontSize = FontSize.small): number => fontSize * 1.5,
}

export const FontWeight: Record<string, FontWeightT> = {
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
}

export const Fonts = StyleSheet.create({
  h1: {
    color: Colors.charcoal,
    fontSize: FontSize.h1,
    lineHeight: LineHeight.h1(),
    fontFamily: FontFamilies.medium,
  },
  h2: {
    color: Colors.charcoal,
    fontSize: FontSize.h2,
    lineHeight: LineHeight.h2(),
    fontFamily: FontFamilies.medium,
  },
  h3: {
    color: Colors.charcoal,
    fontSize: FontSize.h3,
    lineHeight: LineHeight.h3(),
    fontFamily: FontFamilies.medium,
  },
  h4: {
    color: Colors.charcoal,
    fontSize: FontSize.h4,
    lineHeight: LineHeight.h4(),
    fontWeight: '300',
    fontFamily: FontFamilies.light,
  },
  body: {
    color: Colors.white,
    fontSize: FontSize.body,
    lineHeight: LineHeight.body(),
    fontWeight: '300',
    fontFamily: FontFamilies.regular,
  },
  bodyMedium: {
    color: Colors.charcoal,
    fontSize: FontSize.body,
    lineHeight: LineHeight.body(),
    fontWeight: '500',
    fontFamily: FontFamilies.semi,
  },
  overline: {
    color: Colors.charcoal,
    fontSize: FontSize.body,
    lineHeight: LineHeight.body(),
    fontWeight: '300',
    textTransform: 'uppercase',
    fontFamily: FontFamilies.light,
  },
  span: {
    color: Colors.charcoal,
    fontSize: FontSize.span,
    lineHeight: LineHeight.span(),
    fontWeight: '500',
    fontFamily: FontFamilies.semi,
  },
  label: {
    color: Colors.accentGray3,
    fontSize: FontSize.label,
    fontFamily: FontFamilies.regular,
  },
  small: {
    color: Colors.charcoal,
    fontSize: FontSize.small,
    lineHeight: LineHeight.small(),
    fontWeight: '300',
    fontFamily: FontFamilies.light,
  },
})

export default Fonts
