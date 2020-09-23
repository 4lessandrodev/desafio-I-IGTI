export default (Handler, generateColor) => {
 const inputsColor = document.querySelectorAll("input[type=range]");
 function changeColorValue(event) {
  const { value, input } = { value: event.target.value, input: event.target.name };
  document.getElementById(input).value = value;
  const colors = generateColor();
  const handle = new Handler(document);
  handle.render(colors);
 }
 for (const input of inputsColor) {
  input.addEventListener('change', changeColorValue);
 }
};