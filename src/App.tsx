/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import DebugLoader from '@components/debugLoader'
import { NavigationContainer } from '@react-navigation/native'
import { navigationStore } from '@stores/NavigationStore'
import React from 'react'
import {
  AppRegistry,
  View,
} from 'react-native'
import { snapshot, useSnapshot } from 'valtio'

import Config from '@/config'
import BaseNavigator from '@/navigation/BaseNavigator'

const App = () => {
  const { navigation } = useSnapshot(navigationStore)
  return (
    <NavigationContainer
      ref={navigation}
      onReady={() => {
        const startName = navigation.getCurrentRoute()?.name as string
        navigationStore.currentScreen = startName
        navigationStore.screenHistory = [startName]
      }}
    >
      <View style={{
        flex: 1,
      }}
      >
        <BaseNavigator />
      </View>
      {Config.DEBUG_ENABLED && <DebugLoader />}
    </NavigationContainer>
  )
}

const start = async () => {
  // @@SECTION STORYBOOK
  if (Config.STORYBOOK) {
    const storybook = require('../storybook').start
    storybook()
  }
  // @@ENDSECTION STORYBOOK
  if (!Config.STORYBOOK) {
    // @@SECTION DEBUG
    if (Config.DEBUG_ENABLED) {
      const {
        networkRequestStore,
      } = await import('@stores/NetworkRequestStore')
      const snap = snapshot(networkRequestStore)
      snap.startInterceptor()
      require('@stores/NavigationStore.debug')
    }
    // @@ENDSECTION DEBUG
    AppRegistry.registerComponent('ProjectName', () => App)
  }
}

export default start
