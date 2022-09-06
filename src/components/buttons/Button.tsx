import { H3 } from '@components/text'
import * as React from 'react'
import { useCallback } from 'react'
import {
  Pressable, PressableStateCallbackType, TextStyle, ViewStyle,
} from 'react-native'

import SvgIcon from '@/components/svgIcon/SvgIcon'
import { Icons } from '@/constants/images'
import { Colors } from '@/theme'

import {
  defaultStyles, primaryStyles, secondaryArrowButtonStyles, secondaryStyles, signUpStyles, whiteBorderStyles,
} from './styles'

interface BaseProps {
  pressedButtonStyle: Record<string, unknown>,
  buttonStyle: Record<string, unknown>,
  pressedTextStyle: TextStyle,
  textStyle: TextStyle,
}

interface Props {
  title: string,
  onPress: () => void,
  style?: (pressed: boolean) => ViewStyle,
  disabled?: boolean,
  rightComponent?: JSX.Element,
}

export const Button = ({
  pressedButtonStyle,
  buttonStyle,
  pressedTextStyle,
  textStyle,
  title,
  onPress,
  style,
  disabled,
  rightComponent,
}: BaseProps & Props) => {
  const [pressed, setPressed] = React.useState(false)

  const handleStyle = useCallback((state: PressableStateCallbackType) => {
    const defaultStyle = state.pressed ? pressedButtonStyle : buttonStyle
    if (style) {
      return {
        ...defaultStyle,
        ...style(state.pressed),
      }
    }
    return defaultStyle
  }, [style])

  return (
    <Pressable
      style={handleStyle}
      disabled={disabled}
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <H3 style={[defaultStyles.baseTextStyle, pressed ? pressedTextStyle : textStyle]} textAlign="center">{title}</H3>
      {rightComponent}
    </Pressable>
  )
}

export const PrimaryButton = (props: Props) => (
  <Button
    pressedButtonStyle={primaryStyles.pressed}
    buttonStyle={primaryStyles.default}
    pressedTextStyle={{ color: Colors.primary }}
    textStyle={{ color: Colors.almostBlack }}
    {...props}
  />
)

export const SecondaryButton = (props: Props) => (
  <Button
    pressedButtonStyle={secondaryStyles.pressed}
    buttonStyle={secondaryStyles.default}
    pressedTextStyle={{ color: Colors.primary }}
    textStyle={{ color: Colors.white }}
    {...props}
  />
)

export const SignInButton = (props: Props) => (
  <Button
    pressedButtonStyle={signUpStyles.pressed}
    buttonStyle={signUpStyles.default}
    pressedTextStyle={signUpStyles.pressedText}
    textStyle={signUpStyles.text}
    {...props}
  />
)

export const ArrowButton = (props: Props) => (
  <Button
    pressedButtonStyle={primaryStyles.pressed}
    buttonStyle={primaryStyles.default}
    pressedTextStyle={{ color: Colors.primary }}
    textStyle={{ color: Colors.almostBlack }}
    rightComponent={<SvgIcon image={Icons.arrowRight} color={Colors.black} />}
    {...props}
  />
)

export const SecondaryArrowButton = (props: Props) => (
  <Button
    pressedButtonStyle={secondaryArrowButtonStyles.pressed}
    buttonStyle={secondaryArrowButtonStyles.default}
    pressedTextStyle={{ color: Colors.white }}
    textStyle={{ color: Colors.primary }}
    rightComponent={<SvgIcon image={Icons.arrowRight} color={Colors.primary} />}
    {...props}
  />
)

export const WhiteBorderButton = (props: Props) => (
  <Button
    pressedButtonStyle={whiteBorderStyles.pressed}
    buttonStyle={whiteBorderStyles.default}
    pressedTextStyle={whiteBorderStyles.pressedText}
    textStyle={whiteBorderStyles.text}
    {...props}
  />
)
