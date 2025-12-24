module.exports = {
  presets: ['module:@react-native/babel-preset'],

  plugins: [
    // ✅ Required for zod v4
    '@babel/plugin-transform-export-namespace-from',

    // ✅ Required for @/ alias support
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './src',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  ],
};
