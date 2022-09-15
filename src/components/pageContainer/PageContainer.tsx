import Spinner from '@components/spinner'
import React from 'react'
import { View, ViewStyle } from 'react-native'
import { KeyboardAwareScrollView }
  from 'react-native-keyboard-aware-scroll-view'

import styles, { StyledSafeAreaView } from './styles'

const PageContainer = ({
  center,
  children,
  style,
  safeAreaViewStyle,
  viewWrapperStyle,
  isLoading,
}: {
  children?: GenericComponent,
  center?: boolean,
  style?: ViewStyle,
  safeAreaViewStyle?: ViewStyle,
  viewWrapperStyle?: ViewStyle,
  isLoading?: boolean,
}): JSX.Element => (
  <>
    {isLoading && (
      <View style={styles.spinner}>
        <Spinner isTransparent />
      </View>
    )}
    <StyledSafeAreaView center={center} style={safeAreaViewStyle}>
      <View style={[styles.pageContainer, style]}>
        <KeyboardAwareScrollView
          enableOnAndroid
          enableAutomaticScroll
        >
          <View style={[styles.wrapper, viewWrapperStyle]}>
            {children}
          </View>
        </KeyboardAwareScrollView>
      </View>
    </StyledSafeAreaView>
  </>
)

export default PageContainer
