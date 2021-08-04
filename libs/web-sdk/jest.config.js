module.exports = {
  displayName: 'web-sdk',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/web-sdk',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/**/*.d.ts'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: `reports/${Date.now()}`,
        suiteNameTemplate: '{filename}',
        classNameTemplate: '{filename}',
        includeConsoleOutput: true,
      },
    ],
  ],
  rootDir: '../',
  setupFiles: ['jest-canvas-mock'],
};
