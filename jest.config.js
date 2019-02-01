module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['./setup.jest.ts'],

  globals: {
    __TRANSFORM_HTML__: true,
  },
  transform: {
    '^.+\\.(ts|html)$': './node_modules/jest-preset-angular/preprocessor.js',
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
  },
  //   transformIgnorePatterns: ['node_modules/(?!@ngrx|ngx-bootstrap)'],
  //   moduleNameMapper: {
  //     'monaco-editor': '<rootDir>/__mocks__/monaco-editor.js',
  //   },
};
