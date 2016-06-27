module.exports = {
  // tell react where the rootcomponent is
  // (react is composed of different components and there
  // is always 1 root component, that's going to render all
  // of it's children components)
  entry: "./app/components/Main.js",
  // when react is done transpiling everything, tell where
  // to put out that new code
  output: {
    filename: "public/bundle.js"
  },
  // what to actually do with root file (Main.js) and all
  // of it's children components
  module: {
    // we use loaders
    loaders:  [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        // we use babel loader
        loader: 'babel',
        // we need to tell babel, what transformations we want to do
        // to our code
        query: {
          // presets - all the transformations, that babel is going to do to our code
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}

// summary:
// 1. Webpack will find root component (Main.js)
// 2. Run all it's and it's children's code trough transformations defined in presets
// 3. Spits out the new code in output file (bundle.js)
