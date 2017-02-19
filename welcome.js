/**
 * Created by tigra on 19.02.17.
 */
'use strict';

const welcome = function (message) {

    console.log('environment:', NODE_ENV);
    console.log('language:', LANG);

    return `<h1>Welcome, ${message}</h1>`;
};

export default welcome;
