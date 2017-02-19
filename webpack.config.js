/**
 * Created by tigra on 19.02.17.
 */
'use strict';

const webpack = require('webpack');

module.exports = {
    entry: "./home",
    output: {
        filename: "build.js",
        // If you need to use exported functions in the document outside from home.js file
        library: "home"
    }
};
