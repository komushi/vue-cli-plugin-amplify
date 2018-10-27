module.exports = (api, options, rootOptions) => {
  // modify package.json fields
  api.extendPackage({
    pkg: {
      dependencies: {
        'aws-amplify': 'latest',
        'aws-appsync': 'latest',
        'graphql': 'latest',
        'vue-apollo': 'latest',
        'vue-router': 'latest'
      },
      devDependencies: {
        'graphql-tag': '^2.9.0',
        'eslint-plugin-graphql': '^2.1.0'
      }
    }
  })

  // copy and render all files in ./template with ejs
  api.render('./template')

  if (options.foo) {
    // conditionally generate files
  }
}
