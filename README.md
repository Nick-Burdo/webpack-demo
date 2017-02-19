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

#### Install `webpack`

```
$ yarn add webpack --dev
```

#### Simple project files

`home.html` - main `html` file (view him in browser)
`home.js` - main src js file
`welcome.js` - helper (imported from `home.js`)

#### Create `webpack.config.js`

```
const webpack = require('webpack');

module.exports = {
    entry: "./home",
    output: {
        filename: "build.js"
    }
};
```

#### Add scripts for `yarn run` command

Add to the `package.json`:

```
  "scripts": {
    "start": "webpack"
  },
```

#### First build

```
$ yarn run start
```

#### External access to the modules

If you need to use modules in the document (outside from `home.js`):

1). Add needed module export to the `home.js`
```
export {welcome};
```

2). Add `output.library` attribute to the `webpack.config.js`
```
    output: {
        ...
        library: "home"
    }
```

3). Use module in the document (`home.html`)
```
<script>
    home.welcome('webpack');
</script>
```

4). Rebuild project
```
$ yarn run start
```


#### Watch for source change

###### Method 1

In the `package.json`:
```
  "scripts": {
    "start": "webpack -w"
  }
```

###### Method 2

In the `webpack.config.js`:
```
watch: true
```