
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');
module.exports = {
  preset: 'jest-preset-angular',
  //https://github.com/thymikee/jest-preset-angular/issues/167#issuecomment-459686655
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    "@grupo-san-cristobal/agm-core": "<rootDir>/node_modules/@grupo-san-cristobal/agm-core/src/public-api"
  }
};
