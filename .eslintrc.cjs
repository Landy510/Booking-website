module.exports = {
  env: {
    browser: true,
    es2020: true, // set to the same value of the property 'compilerOption.target' in tsconfig.json
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    /* no-use-before-define | START */
    'no-use-before-define': ['error', {
      functions: false,
    }],
    '@typescript-eslint/no-use-before-define': ['error', {
      functions: false,
    }],
    /* END */
  },
  settings: {
    react: {
      version: 'detect', // to tell eslint-plugin-react which version of react is being used
    },
  },
};
