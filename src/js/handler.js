export default class Color {
 constructor(document) {
  this.colorHtmlElementResult = document.getElementById("color-result");
 }
 render({RGB, HEX}) {
  this.colorHtmlElementResult.innerHTML = `<code>${HEX}</code>`;
  this.colorHtmlElementResult.style.backgroundColor = RGB;
 }
}