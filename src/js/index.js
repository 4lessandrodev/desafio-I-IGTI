window.addEventListener('load', start);

function start() {
  const colorResult = document.getElementById("color-result");
  const inputsColor = document.querySelectorAll("input[type=range]");
  
  function changeResultColor() {
    const color = createColor();
    colorResult.style.backgroundColor = color;
  }
  
  function createColor() {
    const red = document.getElementById('red').value;
    const green = document.getElementById('green').value;
    const blue = document.getElementById('blue').value;
    addHexCodeLabel(red, green, blue);
    return `rgb(${red}, ${green}, ${blue})`;
  }
  
  function addHexCodeLabel(r, g, b) {
    colorResult.innerHTML = `<code>${RGBToHex(parseInt(r), parseInt(g), parseInt(b))}</code>`;
  }
  
  function changeColorValue(event) {
    const { value, input } = identifyInputAndValue(event);
    document.getElementById(input).value = value;
    changeResultColor();
  }
  
  function identifyInputAndValue(event) {
    const value = event.target.value;
    const input = event.target.name;
    return {value, input};
  }
  
  function addListennerToInputs() {
    for (const input of inputsColor) {
      input.addEventListener('change', changeColorValue);
    }
  }
  
  
  function RGBToHex(r,g,b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    
    if (r.length === 1) {
      r = "0" + r;
    }
    if (g.length === 1) {
      g = "0" + g;
    }
    if (b.length === 1) {
      b = "0" + b;
    }
    
    return "#" + r + g + b;
  }
  
  addListennerToInputs();
  createColor();
}