module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'node',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sss|styl)$': 'identity-obj-proxy',
    },
    moduleFileExtensions: ['js', 'jsx'],
    preset: '@shelf/jest-mongodb',
    setupFiles: ['./polyfills.js'],
    testTimeout: 10000,
  };
  