var testRunnerConfig = {
  describe: 'Stem stylus utils',
  stylus: {
    use: require('./index')(),
    import: ['config', 'modules/utils', 'theme']
  }
}

require('stylus-test-runner')(testRunnerConfig)