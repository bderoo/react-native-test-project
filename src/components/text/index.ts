import styled from '@emotion/native'
import { TextStyle } from 'react-native'

import { Fonts } from '@/theme'

type TextProps = {
  /** Override color */
  color?: string,
  /** Override font family */
  fontFamily?: string,
  /** Override font size */
  fontSize?: number,
  /** Override pass arbitrary styles that are spread last */
  style?: TextStyle,
  /** Override font weight */
  fontWeight?: string,
  /** Letter Spacing */
  letterSpacing?: number,
  /** Override line height */
  lineHeight?: number,
  /** Override alignment */
  textAlign?: string,
  /** Text transform */
  textTransform?: string,
}

// @ts-ignore
export const StyledText = () => styled.Text(({
  color,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  textAlign,
  letterSpacing = 0,
  textTransform = 'none',
}: TextProps) => ({
  color,
  fontSize,
  fontFamily,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
  textTransform,
}))

export const H1 = StyledText()
H1.defaultProps = Fonts.h1

export const H2 = StyledText()
H2.defaultProps = Fonts.h2

export const H3 = StyledText()
H3.defaultProps = Fonts.h3

export const H4 = StyledText()
H4.defaultProps = Fonts.h4

export const Body = StyledText()
Body.defaultProps = Fonts.body

export const Span = StyledText()
Span.defaultProps = Fonts.span

export const LabelText = StyledText()
LabelText.defaultProps = Fonts.label

export const Small = StyledText()
Small.defaultProps = Fonts.small
