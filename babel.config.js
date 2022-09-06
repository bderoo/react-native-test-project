module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@root': './',
          '@': ['./src', './debug', './generated'],
          '@components': ['./src/components', './debug/components', './generated/components'],
          '@screens': ['./src/screens', './debug/screens', './generated/screens'],
          '@stores': ['./src/stores', './debug/stores', './generated/stores'],
          '@theme': ['./src/theme', './debug/theme', './generated/theme'],
          '@constants': ['./src/constants', './debug/constants', './generated/constants'],
          '@navigation': ['./src/navigation', './debug/navigation', './generated/navigation'],
        },
      },
    ],
    '@babel/plugin-proposal-export-default-from',
  ],
}
