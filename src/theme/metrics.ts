import { Dimensions, Platform } from 'react-native'
import { isTablet } from 'react-native-device-info'
import { getBottomSpace, getStatusBarHeight, isIphoneX }
  from 'react-native-iphone-x-helper'

const {
  width,
  height,
} = Dimensions.get('window')

export const tabletOrPhone = (tablet: number, phone: number): number => (
  isTablet() ? tablet : phone
)
export const isiPhoneX = (iPhoneX: number, regular: number): number => (
  isIphoneX() ? iPhoneX : regular
)

const SmallScreenWidth = 375 // iPhone 8 - 4.7 inches
const SmallScreenHeight = 667 // iPhone 8 - 4.7 inches
const isSmallScreen = (small: number, large: number): number => {
  if (height <= SmallScreenHeight) {
    return small
  }
  return large
}

const isNarrow = width < SmallScreenWidth

const innerNavigationHeight = 54

const Metrics = {
  getStatusBarHeight,
  widthRatio: width / SmallScreenWidth,
  heightRatio: height / SmallScreenHeight,
  safeViewContainerHeight: height - getStatusBarHeight(true) - getBottomSpace(),
  screenWidth: width,
  screenHeight: height,
  statusBarHeight: (safe = false): number => getStatusBarHeight(safe),
  iPhoneXBottomSpaceHeight: getBottomSpace(),
  navigationHeight: innerNavigationHeight,
  screenHeightWithNavigation: height
    - getStatusBarHeight(false)
    - innerNavigationHeight,
  safeMarginTop: (regular: number, safe = false): number => {
    if (isIphoneX()) {
      return getStatusBarHeight(safe) + regular
    }
    return regular
  },
  safeMarginBottom: (regular: number): number => {
    if (isIphoneX()) {
      return getBottomSpace() + regular
    }
    return regular
  },
  isiPhone: Platform.OS === 'ios',
  osVersion: Platform.Version,
  footerHeight: isiPhoneX(90, 75),
  headerHeight: Platform.OS === 'android'
    ? 56
    : (getStatusBarHeight(true) + 44),
  tabBarHeight: isiPhoneX(getBottomSpace() + 64, 64),
  isiPhoneX,
  isSmallScreen,
  isNarrow,
  hasNotchOnAndroidScreen: getStatusBarHeight(true) > 24,

  // Margins/Padding
  xxxxSmall: 2,
  xxxSmall: 4,
  xxSmall: 8,
  xSmall: 12,
  small: 16,
  medium: 20,
  large: 24,
  xLarge: 28,
  xxLarge: 32,
  xxxLarge: 40,
  xxxxLarge: 64,
  xxxxxLarge: 80,
  xxxxxxLarge: 100,
  huge: 116,
  hugerer: 261,

  iconHeight: 24,
  smallIconHeight: 14,
  buttonHeight: 40,
  clearButtonHeight: 30,
  largeCard: 150,

  accordionViewHeight: 56,
  chipHeight: 24,

  borderRadiusXSmall: 2,
  borderRadiusSmall: 4,
  borderRadius: 6,
  borderRadiusMedium: 8,
  borderRadiusLarge: 10,
  borderWidth: 1,

  toastHeight: 47,

  inputHeight: 48,
  multilineInputHeight: 174,

  shadowOpacity: 0.2,

  // Navigationbar
  navigationBarHeight: 60,
  navigationBarWidth: '90%',

  fullSize: '100%',
}

export default Metrics
