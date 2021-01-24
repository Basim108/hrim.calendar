module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>$1',
    '^~/(.*)$': '<rootDir>$1',
    '^vue$': 'vue/dist/vue.common.js',
    'vuetify/lib(.*)': '<rootDir>/node_modules/vuetify/es5$1'
  },
  moduleFileExtensions: [
    'js',
    'ts',
    'vue',
    'json'
  ],
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(vuetify)/)'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
    '<rootDir>/store/month.js',
    '<rootDir>/middleware/**/*.js'
  ],
  setupFilesAfterEnv: ['./jest.setup.js']
}
