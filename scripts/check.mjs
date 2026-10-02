import {readFile,access} from 'node:fs/promises';import {execFileSync} from 'node:child_process';
for(const name of ['app','engine','levels','reference','regex-worker'])execFileSync(process.execPath,['--check',`src/${name}.js`]);
for(const name of ['gremlin','imp','slime','ghost','wraith','nightmare','mage'])await access(`public/assets/${name}.png`);
const html=await readFile('index.html','utf8');if(/https?:\/\//.test(html))throw Error('External runtime asset dependency');
if(new Set([...html.matchAll(/id="([^"]+)"/g)].map(m=>m[1])).size!==[...html.matchAll(/id="([^"]+)"/g)].length)throw Error('Duplicate IDs');
console.log('Syntax, local assets and HTML IDs checked.');
