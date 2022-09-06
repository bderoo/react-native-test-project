import { configure, getStorybookUI } from '@storybook/react-native'
import { AppRegistry } from 'react-native'
import Config from 'src/config'

// eslint-disable-next-line import/no-unresolved
import { loadStories } from './storyLoader'

export const start = () => {
  configure(() => {
    loadStories()
  }, module)
  const StorybookUIRoot = getStorybookUI({
    resetStorybook: true,
    onDeviceUI: Config.STORYBOOK,
    isUIHidden: true,
    asyncStorage: null,
  })
  AppRegistry.registerComponent('ProjectName', () => StorybookUIRoot)
}

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
