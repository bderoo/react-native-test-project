import {
  createNavigationContainerRef,
  NavigationContainerRefWithCurrent,
} from '@react-navigation/native'
import {
  proxy, ref,
} from 'valtio'

import { Roots, RootStackParamList } from '@/navigation'

const navigationRef = createNavigationContainerRef<RootStackParamList>()

export const navigate = (name: keyof RootStackParamList, params?: object) => {
  navigationRef.navigate(name as string, params)
}

export const goBack = () => {
  navigationRef.goBack()
}

type NavigationHistoryItem = {
  time: number,
  action: unknown,
}

type NavigationStore = {
  navigation: NavigationContainerRefWithCurrent<RootStackParamList>
  actionHistory: Array<NavigationHistoryItem>
  screenHistory: Array<keyof RootStackParamList>
  currentScreen: keyof RootStackParamList
}

export const navigationStore = proxy<NavigationStore>({
  navigation: ref(navigationRef),
  actionHistory: [],
  screenHistory: [],
  currentScreen: Roots.InitialRoute,
})
