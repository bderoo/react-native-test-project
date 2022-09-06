import DebugNavigator from '@navigation/DebugNavigator'
import navigationStyles from '@navigation/styles'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '@screens/home'
import Login from '@screens/login'
import { goBack } from '@stores/NavigationStore'
import React from 'react'
import { Pressable, View } from 'react-native'
import { useSnapshot } from 'valtio'

import SvgIcon from '@/components/svgIcon/SvgIcon'
import { Icons } from '@/constants/images'
import { Roots } from '@/navigation'
import { authStore } from '@/stores/AuthStore'

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
  return (
    <Stack.Navigator screenOptions={{
      gestureEnabled: false,
      presentation: 'transparentModal',
    }}
    >
      {accessToken && me && me.id ? (
        <>
          <Stack.Screen name={Roots.Home} component={Home} options={{ headerShown: false }} />
          <Stack.Screen
            name={Roots.DebugStack}
            component={DebugNavigator}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name={Roots.Login}
            component={Login}
            options={headerOptions(() => null, true)}
          />
          <Stack.Screen
            name={Roots.DebugStack}
            component={DebugNavigator}
          />
        </>
      ) }
    </Stack.Navigator>
  )
}

export default BaseNavigator
