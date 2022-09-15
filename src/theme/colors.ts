export const FigmaColors = {
  grey900: 'rgb(5,5,5)',
  grey850: 'rgb(24,26,28)',
  grey800: 'rgb(36,36,36)',
  grey750: 'rgb(31,33,35)',
  grey700: 'rgb(46,46,46)',
  grey200: 'rgb(219,219,219)',
  grey50: 'rgb(246,246,246)',
  white: 'rgb(255,255,255)',

  green700: 'rgb(0,159,88)',
  green200: 'rgb(71,230,182)',
  green50: 'rgb(217,250,237)',

  backgroundMobile: 'rgb(5,5,5)',
  background: 'rgb(29,29,31)',

  accent1: 'rgb(49,49,51)',
  accent2: 'rgb(61,60,63)',
  accent3: 'rgb(140,138,147)',
  reviews: 'rgb(252,185,13)',
  alert: 'rgb(200,53,50)',

  labelColor: 'rgb(245,245,245)',
}

const Colors = {
  primary: 'rgb(71,230,182)',
  secondary: 'rgb(255, 255, 255)', // #FFFFFF
  tertiary: 'rgb(95, 156, 177)', // ##5F9CB1
  tertiaryLight: 'rgb(156,199,214)', // ##9cc7d6

  backgroundGray: FigmaColors.grey850,
  accentGray: 'rgb(49,49,51)',
  textGray: 'rgb(219,219,219)',
  accentGray2: 'rgb(61,60,63)',
  accentGray3: 'rgb(140,138,147)',
  defaultAvatarGray: 'rgb(43, 44, 45)',

  white: 'rgb(255, 255, 255)',
  black: 'rgba(0, 0, 0)',
  almostBlack: 'rgb(10,10,10)',
  transparent: 'transparent',

  lightGray: 'rgb(243, 243, 243)', // #F3F3F3
  lighterGray: 'rgb(240, 240, 240)', // #F0F0F0
  mediumGray: 'rgb(184, 197, 212)', // #B8C5D4
  gray: 'rgb(196, 196, 196)', // #CACACA
  darkGray: 'rgb(133, 133, 133)', // #858585
  charcoal: 'rgb(51, 51, 51)', // #333333
  redHighlight: 'rgb(248, 59, 40)', // #F83B28
  purple: 'rgb(86, 70, 132)', // #564684
  blue: 'rgb(52,159,231)', // #286994

  success: 'rgb(40, 148, 122)', // #28947A
  warning: FigmaColors.reviews, // #FF8F39
  error: FigmaColors.alert, // ##BD2C1D

  shadow: 'rgba(51, 51, 51, 0.15)',
}

export const colorWithOpacity = (
  rgbColor: ValueOf<typeof Colors>,
  opacity: number,
): string => {
  if (rgbColor.includes(',')) {
    const alpha = Math.min(Math.max(opacity, 0), 1)
    const rgbToArray = rgbColor
      .slice(rgbColor.indexOf('(') + 1, rgbColor.indexOf(')'))
      .split(',')
    if (rgbToArray && rgbToArray.length >= 3) {
      const red = parseInt(rgbToArray[0], 10)
      const green = parseInt(rgbToArray[1], 10)
      const blue = parseInt(rgbToArray[2], 10)
      return `rgba(${red}, ${green}, ${blue}, ${alpha})`
    }
  }
  return rgbColor
}

export default Colors
