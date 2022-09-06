import AsyncStorage from '@react-native-async-storage/async-storage'
import type { ProxyPersistStorageEngine } from 'valtio-persist'
import ProxyWithPersist, { PersistStrategy } from 'valtio-persist'

import { User } from '@/typings/User'

type AuthStore = {
  accessToken: string | null,
  refreshToken: string | undefined,
  me: User | undefined,
}

const storage: ProxyPersistStorageEngine = {
  getItem: (name) => AsyncStorage.getItem(name),
  setItem: (name, value) => AsyncStorage.setItem(name, value),
  removeItem: (name) => AsyncStorage.removeItem(name),
  // @ts-ignore
  getAllKeys: () => AsyncStorage.getAllKeys(),
}

export const authStore = ProxyWithPersist<AuthStore>({
  getStorage: () => storage,
  name: 'tokenStore',
  version: 0,
  initialState: {
    accessToken: null,
    refreshToken: undefined,
    me: undefined,
  },
  migrations: {},
  persistStrategies: PersistStrategy.SingleFile,
})

export const login = async (username: string) => {
  authStore.me = {
    id: '1',
    username,
  }
  authStore.accessToken = '123'
  authStore.refreshToken = '123'
}

export const logout = async () => {
  authStore.me = undefined
  authStore.accessToken = null
  authStore.refreshToken = undefined
}

export const refreshAccessToken = async () => {
  authStore.accessToken = '123'
  authStore.refreshToken = '123'
}
