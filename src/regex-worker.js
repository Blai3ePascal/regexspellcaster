import { evaluate } from './engine.js';
self.onmessage=({data})=>{self.postMessage(evaluate(data.pattern,data.level));};
