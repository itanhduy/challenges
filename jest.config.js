module.exports = {
  testURL: 'http://localhost',
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.(css|scss|less)$': 'jest-css-modules',
  },
  globals: {
    NODE_ENV: 'test',
  },
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules'],
}
