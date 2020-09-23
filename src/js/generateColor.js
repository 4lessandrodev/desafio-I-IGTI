import converteColor from './converteColor.js';
export default () => {
 function converterToNumber(n) {
  return parseInt(n);
 }
 const red = document.getElementById('red').value;
 const green = document.getElementById('green').value;
 const blue = document.getElementById('blue').value;
 const HEX = converteColor(converterToNumber(red), converterToNumber(green), converterToNumber(blue));
 return {RGB:`rgb(${red}, ${green}, ${blue})`, HEX};
};