const config = {
  roots: ['.', './test'],
  verbose: true,
  transform: {
    '^.+\\.[jt]sx?$': 'ts-jest'
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|svg)$": "<rootDir>/test/fileMock.js",
    '^<src>/(.*)$': '<rootDir>/src/$1',
    '^<pages>/(.*)$': '<rootDir>/src/components/pages/$1',
    '^<components>/(.*)$': '<rootDir>/src/components/$1',
    '^<helpers>/(.*)$': '<rootDir>/src/helpers/$1',
    '^<hooks>/(.*)$': '<rootDir>/src/hooks/$1',
    '^<styles>/(.*)$': '<rootDir>/src/styles/$1',
  },
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/test/config/assetTransformer.js',
    '<rootDir>/(build|dist|docs|node_modules)/',
  ],
  coverageReporters: [
    'json-summary',
    'text',
    'lcov',
  ],
};

module.exports = config;
