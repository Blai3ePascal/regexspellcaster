import { levels } from './levels.js';
export const SAVE_KEY='regexSpellcasterV2';
export function newGame(name='Aprendiz'){return {version:2,name:name.slice(0,40),level:0,hp:150,gold:100,enemyHP:levels[0].enemy.hp,failures:0,potions:0,scrolls:0,timewarp:false,completed:[],phase:'playing',pending:false};}
const integer=(v,min,max,fallback)=>Number.isSafeInteger(v)&&v>=min&&v<=max?v:fallback;
export function hydrate(raw){
 if(!raw||typeof raw!=='object')return null;
 const s=newGame(typeof raw.name==='string'&&raw.name.trim()?raw.name:'Aprendiz');
 s.level=integer(raw.level,0,39,0);s.hp=integer(raw.hp,0,150,150);s.gold=integer(raw.gold,0,1000000,100);
 s.potions=integer(raw.potions,0,2,0);s.scrolls=integer(raw.scrolls,0,2,0);s.timewarp=raw.timewarp===true;
 s.completed=Array.isArray(raw.completed)?[...new Set(raw.completed.filter(x=>Number.isInteger(x)&&x>=0&&x<40))]:[];
 s.enemyHP=integer(raw.enemyHP,0,levels[s.level].enemy.hp,levels[s.level].enemy.hp);s.failures=integer(raw.failures,0,2,0);
 s.phase=raw.phase==='victory'&&s.completed.includes(39)?'victory':s.hp===0?'defeat':'playing';
 s.pending=s.phase==='playing'&&s.enemyHP===0;
 if(s.pending){s.level=Math.min(39,s.level+1);s.enemyHP=levels[s.level].enemy.hp;s.pending=false;}
 return s;
}
export function readSave(storage){try{const v2=storage.getItem(SAVE_KEY);if(v2)return hydrate(JSON.parse(v2));const old=storage.getItem('regexSpellcasterSave');if(old){const raw=JSON.parse(old);const s=hydrate(raw);if(s)s.completed=Array.from({length:s.level},(_,i)=>i);return s;}return null;}catch{return null;}}
export function writeSave(storage,s){try{storage.setItem(SAVE_KEY,JSON.stringify(s));return true;}catch{return false;}}
export function importSave(text){
 const raw=JSON.parse(text);
 if(!raw||typeof raw.name!=='string'||!Number.isInteger(raw.level)||raw.level<0||raw.level>39||!Number.isInteger(raw.hp)||raw.hp<0||raw.hp>150||!Number.isInteger(raw.gold)||raw.gold<0||raw.gold>1000000)throw Error('Invalid saved game');
 return hydrate(raw);
}
export function evaluate(pattern,level){
 if(typeof pattern!=='string'||pattern.length>512)return {error:'El patrón puede tener como máximo 512 caracteres.'};
 if(!pattern)return {error:'Escribe un patrón. Para el texto vacío puedes usar ^$.'};
 let re;try{new RegExp(pattern,'g');re=new RegExp(level.mode==='full'?`^(?:${pattern})(?![\\s\\S])`:pattern,'g');}catch{return {error:'La expresión no es válida. Revisa paréntesis, corchetes y barras invertidas.'};}
 const matches=text=>{const out=[];let m;re.lastIndex=0;while((m=re.exec(text))!==null){out.push({text:m[0],index:m.index});if(m[0]==='')re.lastIndex++;if(out.length>300)break;}return out;};
 const rows=[...level.positive.map((text,i)=>{const hits=matches(text);const pass=level.mode==='full'?hits.some(m=>m.index===0&&m.text.length===text.length):JSON.stringify(hits)===JSON.stringify(level.targets[i]);return {text,expect:true,pass,matches:hits};}),...level.negative.map(text=>{const hits=matches(text);return {text,expect:false,pass:level.mode==='full'?!hits.some(m=>m.index===0&&m.text.length===text.length):hits.length===0,matches:hits};})];
 return {correct:rows.every(r=>r.pass),rows};
}
export function cast(s,correct){
 if(s.phase!=='playing'||s.pending)return {type:'blocked'};
 const l=levels[s.level];if(!correct){s.failures++;if(s.failures===3){s.failures=0;s.hp=Math.max(0,s.hp-10);if(!s.hp)s.phase='defeat';return {type:'damage',amount:10};}return {type:'miss'};}
 s.failures=0;s.enemyHP=Math.max(0,s.enemyHP-l.damage);
 if(s.enemyHP)return {type:'hit',amount:l.damage};
 s.gold+=l.reward;if(!s.completed.includes(s.level))s.completed.push(s.level);
 if(s.level===39){s.phase='victory';return {type:'victory',reward:l.reward};}
 s.pending=true;return {type:'defeated',reward:l.reward};
}
export function advance(s){if(!s.pending||s.phase!=='playing')return false;s.level++;s.enemyHP=levels[s.level].enemy.hp;s.failures=0;s.pending=false;return true;}
export function jump(s,code){const idx=levels.findIndex(l=>l.code.toLocaleUpperCase('es')===code.trim().toLocaleUpperCase('es'));if(idx<0)return false;s.level=idx;s.enemyHP=levels[idx].enemy.hp;s.failures=0;s.pending=false;s.phase=s.hp===0?'defeat':'playing';return true;}
export function shopStatus(s){const blocked=s.phase!=='playing'||s.pending;return {potion:!blocked&&s.level<14&&s.potions<2&&s.hp<150&&s.gold>=200,scroll:!blocked&&s.level<14&&s.scrolls<2&&s.gold>=350,timewarp:!blocked&&s.level>=3&&!s.timewarp&&s.gold>=100};}
export function purchase(s,item){const available=shopStatus(s);if(!Object.hasOwn(available,item)||!available[item])return false;if(item==='potion'){s.gold-=200;s.hp=150;s.potions++;}else if(item==='scroll'){s.gold-=350;s.scrolls++;}else if(item==='timewarp'){const spent=s.gold;s.level=Math.max(0,s.level-Math.floor(spent/100)*2);s.gold=spent*2;s.hp=150;s.timewarp=true;s.enemyHP=levels[s.level].enemy.hp;s.failures=0;s.pending=false;}return true;}
