import mockAsyncStorage from
  '@react-native-async-storage/async-storage/jest/async-storage-mock'

jest.mock(
  './node_modules/react-native/Libraries/EventEmitter/NativeEventEmitter',
)

jest.mock('react-native-device-info', () => ({
  isTablet: () => false,
}))

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage)

jest.mock('react-native-localize', () => ({
  getLocales: () => [
    {
      countryCode: 'GB',
      languageTag: 'en-GB',
      languageCode: 'en',
      isRTL: false,
    },
    {
      countryCode: 'US',
      languageTag: 'en-US',
      languageCode: 'en',
      isRTL: false,
    },
  ],
}))
