## Keys

1. I use `yarn` instead `npm` (see [yarn](https://yarnpkg.com/lang/en/))

2. I use a remote server for the development, so I do not need `webpack-dev-server`.   

3. In my projects API has different URLs for the development and production. So I need to import the appropriate configuration files. For this purpose, I use the plugin `webpack.DefinePlugin`, which transmits value of environment variable NODE_ENV  into the application code.

4. My projects comprises a plurality of separate modules that share the same code. To build the JS files of different modules that share a common code I use the plugin `webpack.optimize.CommonsChunkPlugin`.

## Simple project

#### Create `package.json`

```
$ yarn init -y 
```

#### Install `webpack` & `webpack babel loader`

```
$ yarn add webpack --dev
$ yarn add babel-core babel-loader --dev
```

#### Simple project files

`home.html` - main `html` file (view him in browser)
`home.js` - main src js file
`welcome.js` - external module (imported in the `home.js`)

#### Create `webpack.config.js`

```
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    entry:  "./home",
    output: {
        filename: "build.js",
        library:  "home"
    },

    /* set watch mode for development */
    watch: NODE_ENV == 'development',

    /* set watch timeout (optional) */
    watchOptions: {
        aggregateTimeout: 100
    },

    /* add source map in development mode */
    devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,

    /* setting of variables that will be available in the source code */
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG:     JSON.stringify('ru')
        })
    ],

    /* translate ES6 to ES5 via `babel`
    module: {
        loaders: [{
            test:   /\.js$/,
            loader: 'babel-loader'
        }]
    }
};

/* add Uglify Plugin in production mode */
if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                // don't show unreachable variables etc
                warnings:     false,
                drop_console: true,
                unsafe:       true
            }
        })
    );
}
```

#### Add scripts for `yarn run` command

Add to the `package.json`:

```
  "scripts": {
    "start": "webpack"
  },
```

#### Build

```
$ yarn run start
```

