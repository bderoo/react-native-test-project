function makeModuleNameMapper(srcPath, tsconfigPath) {
  // Get paths from tsconfig
  // eslint-disable-next-line import/no-dynamic-require
  const { paths } = require(tsconfigPath).compilerOptions

  const aliases = {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(png)$': '<rootDir>/mocks/fileMock.js',
  }

  // Iterate over paths and convert them into moduleNameMapper format
  Object.keys(paths).forEach((item) => {
    const key = item.replace('/*', '/(.*)')
    aliases[key] = paths[item].map((p) => p.replace('/*', '/$1'))
      .map((p) => `${srcPath}/${p}`)
  })
  return aliases
}

module.exports = {
  collectCoverage: true,
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/?!(static-container)'],
  verbose: true,
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: [
    './test.setup.js',
    '@testing-library/jest-native/extend-expect',
  ],
  testRegex: '.*.test\\.(ts|tsx|js)$',
  moduleNameMapper: makeModuleNameMapper('<rootDir>', './tsconfig.json'),
  roots: ['<rootDir>', '<rootDir>'],
}
