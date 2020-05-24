module.exports = {
  pagePerSection: true,
  sections: [
    {
      name: 'Project',
      content: 'src/docs/introduction.md',
    },
    {
      name: 'Components',
      components: 'src/components/**/[A-Z]*.{ts,tsx}',
      exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
      usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
    },
  ],
  styles: {
    Playground: {
      preview: {
        width: '100%',
        display: 'inline-block',
        padding: '0',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'rgb(232, 232, 232)',
        borderImage: 'initial',
        borderRadius: '3px',
      },
    },
  },
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
