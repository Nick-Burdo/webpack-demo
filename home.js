/**
 * Created by tigra on 19.02.17.
 */
'use strict';

import welcome from './welcome';

const root = document.querySelector('#root');

root.innerHTML = welcome('Home Page');

// If you need to use welcome() in the document outside from home.js file
export {welcome};
