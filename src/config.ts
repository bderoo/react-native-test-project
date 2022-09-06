import RNConfig from 'react-native-config'

// eslint-disable-next-line no-restricted-imports
import packageJSON from '../package.json'

const config = {
  STORYBOOK: RNConfig.STORYBOOK === 'true',
  GIT_REVISION_SHA: RNConfig.GIT_REVISION_SHA || 'n/a',
  version: packageJSON.version,
  APP_ENV: RNConfig.APP_ENV,
  DEBUG_ENABLED: RNConfig.APP_ENV !== 'prd',
  API_URL: RNConfig.API_URL,
  appName: packageJSON.name,
}

export default config
