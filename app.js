
const username = document.getElementById('input-nombre');

const btnCalculate = document.getElementById('btn-calcular');
const btnPrediction = document.getElementById("btn-predecir");

const number1 = document.getElementById('input-nota1');
const number2 = document.getElementById('input-nota2');
const number3 = document.getElementById('input-nota3');

const response = document.getElementById('resultado-final');

btnCalculate.addEventListener('click', calculateNote);

window.addEventListener("load", LoadPage);
function LoadPage(){
    btnPrediction.addEventListener("click", prediction);
}

function calculateNote(event) {
  event.preventDefault();

  let note1 = parseFloat(number1.value);
  let note2 = parseFloat(number2.value);
  let note3 = parseFloat(number3.value);
  
  let result = ((note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4)).toFixed(2);
  if (note1 < 0 || note1 > 5 || note2 < 0 || note2 > 5 || note3 < 0 || note3 > 5) {
    response.textContent = `Student ${username.value}, Tiene que digitar valores entre 0 a 5.`;
  } else {
    if (result < 3.5) {
      response.style.color = 'black';
      response.textContent = `Student ${username.value} reprobo, su nota es: ${result}`;
    } else if (result >= 3.5 && result < 4.5) {
      response.style.color = 'orange';
      response.textContent = `Student ${username.value} aprobó, su nota es:  ${result}`;
    } else if (result >= 4.5) {
      response.style.color = 'green';
      response.textContent = `Student ${username.value} aprobó, su nota es: ${result}`;
    }
  }
}


function prediction() {
  let note1 = parseFloat(number1.value);
  let note2 = parseFloat(number2.value);
  let total = ((3.5 - (note1 * 0.3 + note2 * 0.3)) / 0.4).toFixed(2);
  number3.value = total;
}

  