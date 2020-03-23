module.exports = {
  components: 'src/components/**/[A-Z]*.{ts,tsx}',
  styleguideDir: 'docs',
  styleguideComponents: {
    Wrapper: __dirname + '/src/theme/ThemeWrapper.tsx',
  },
  propsParser: require('react-docgen-typescript').withDefaultConfig({
    savePropValueAsString: true,
  }).parse,
  webpackConfig: {
    entry: './src/index.ts',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/dist',
    },

    // Enable sourcemaps for debugging webpack"s output.
    devtool: 'source-map',

    resolve: {
      // Add ".ts" and ".tsx" as resolvable extensions.
      extensions: ['.ts', '.tsx'],
    },

    module: {
      rules: [
        // All files with a ".ts" or ".tsx" extension will be handled by "awesome-typescript-loader".
        { test: /\.tsx?$/, loader: 'ts-loader' },
      ],
    },
  },
};
