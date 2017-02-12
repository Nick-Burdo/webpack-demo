## Keys

1. Task: Analysis of the article ["A Beginner’s Guide to Webpack 2 and Module Bundling"](https://www.sitepoint.com/beginners-guide-to-webpack-2-and-module-bundling/) and check ability to use `webpack` to build my projects.   

2. I use `yarn` instead `npm` (see [yarn](https://yarnpkg.com/lang/en/))

3. I use a remote server for the development, so I do not need `webpack-dev-server`.   

4. In my projects API has different URLs for the development and production. So I need to import the appropriate configuration files. For this purpose, I use the plugin `webpack.DefinePlugin`, which transmits value of environment variable NODE_ENV  into the application code.

5. My projects comprises a plurality of separate modules that share the same code. To build the JS files of different modules that share a common code I use the plugin `webpack.optimize.CommonsChunkPlugin`.
