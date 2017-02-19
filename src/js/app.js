/**
 * Created by tigra on 11.02.17.
 */
'use strict';
import {groupBy} from 'lodash/collection';

import '../scss/style.scss';

import config from './config';
import people from './people';
import codeURL from '../images/code.png';

const managerGroups = groupBy(people, 'manager');
const root = document.querySelector('#root');

let html = `<h1>Build for ${config.env}</h1>`;
html += `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`
root.innerHTML = html;

const img = document.createElement('img');
img.src = codeURL;
img.style.backgroundColor = "#2B3A42";
img.style.padding = "20px";
img.width = 32;
document.body.appendChild(img);

console.log(process.env.NODE_ENV);
