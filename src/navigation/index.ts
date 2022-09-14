import { ParamListBase } from '@react-navigation/native'
import { NetworkRequest } from '@stores/NetworkRequestStore'

export interface RootStackParamList extends ParamListBase {
  __base: Record<string, unknown>,
  __RequestInfo: {
    request: NetworkRequest,
  },
}

// Roots with __ are for debugging purposes only
// InitialRoute is the first route that the app will load,
export enum Roots {
  __RequestInfo = '__RequestInfo',
  __NetworkRequests = '__NetworkRequests',
  InitialRoute = 'InitialRoute',
  Home = 'Home',
  Login = 'Login',
  DebugStack = 'DebugStack',
}
