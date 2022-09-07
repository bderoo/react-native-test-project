import SvgIcon from '@components/svgIcon/SvgIcon'
import { Icons } from '@constants/images'
import DebugNavigator from '@navigation/DebugNavigator'
import navigationStyles from '@navigation/styles'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '@screens/home'
import Login from '@screens/login'
import { authStore } from '@stores/AuthStore'
import { goBack } from '@stores/NavigationStore'
import React from 'react'
import { Pressable, View } from 'react-native'
import { useSnapshot } from 'valtio'

import Config from '@/config'
import { Roots } from '@/navigation'

const Stack = createNativeStackNavigator()

const headerLeft = () => (
  <Pressable onPress={goBack} style={navigationStyles.headerLeftContainer}>
    <View>
      <SvgIcon image={Icons.arrowLeft} />
    </View>
  </Pressable>
)

const headerOptions = (
  title: string | (() => void),
  showBackButton = true,
): Record<string, unknown> => ({
  headerTitle: title,
  headerLeft: showBackButton ? headerLeft : () => <View />,
  headerStyle: navigationStyles.header,
})

const BaseNavigator = (): JSX.Element => {
  const { accessToken, me } = useSnapshot(authStore)
  const primaryScreens = accessToken && me && me.id ? (
    <Stack.Screen name={Roots.Home} component={Home} options={{ headerShown: false }} />
  ) : (
    <Stack.Screen name={Roots.Login} component={Login} options={headerOptions(() => null, true)} />
  )
  console.log(Config)
  const debugScreens = Config.DEBUG_ENABLED && (
    <Stack.Screen name={Roots.DebugStack} component={DebugNavigator} />
  )
  return (
    <Stack.Navigator screenOptions={{
      gestureEnabled: false,
      presentation: 'transparentModal',
    }}
    >
      {primaryScreens}
      {debugScreens}
    </Stack.Navigator>
  )
}

export default BaseNavigator
