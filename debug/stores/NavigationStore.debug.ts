import { navigationStore } from '@stores/NavigationStore'
import { snapshot } from 'valtio'

const { navigation: navigationRef } = snapshot(navigationStore)
navigationRef.addListener('__unsafe_action__', (e) => {
  const {
    actionHistory,
    screenHistory,
  } = snapshot(navigationStore)
  navigationStore.actionHistory = [...actionHistory, {
    time: Date.now(),
    action: e.data.action,
  }]
  if (e.data.action.type === 'NAVIGATE'
    && e.data.action.payload
    // @ts-ignore
    && e.data.action.payload.name
  ) {
    // @ts-ignore
    const newName = e.data.action.payload.name
    navigationStore.currentScreen = newName
    navigationStore.screenHistory = [...screenHistory, newName]
  } else if (e.data.action.type === 'GO_BACK') {
    const newHistory = [...screenHistory]
    newHistory.pop()
    navigationStore.currentScreen = screenHistory[newHistory.length - 1]
    navigationStore.screenHistory = newHistory
  }
})
