## Keys

1. Task: Analysis of the article "A Beginner’s Guide to Webpack 2 and Module Bundling" and webpack ability to use to build 
my projects.   

2. I use `yarn` instead `npm`

3. I use a remote server for the development, so I do not need webpack-dev-server.   

4. In my projects API has different URLs for the development and productions. So I need to connect the appropriate 
configuration iles. For this purpose, I use the plugin webpack.DefinePlugin, which transmits to the application value 
of environment variable NODE_ENV

5. My projects comprises a plurality of separate modules that share the same code. To build the JS files of different 
modules that share a common code I use the plugin webpack.optimize.CommonsChunkPlugin.
