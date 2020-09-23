window.addEventListener('load', start);
import adicionarListener from './addEventListener.js';
import Handle from './handler.js';
import * as generateColor from './generateColor.js';

function start() {

  const _generateColor = generateColor.default;
  adicionarListener(Handle, _generateColor);
  
}