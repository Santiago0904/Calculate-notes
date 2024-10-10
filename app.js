const number1 = document.getElementById('note1');
const number2 = document.getElementById('note2');
const number3 = document.getElementById('note3');
const username = document.getElementById('name');
const btn_Calculate = document.getElementById('btn-calculate');
const response = document.getElementById('result');


btn_Calculate.addEventListener('click', calculate);

function calculate(event) {

    event.preventDefault();

    let note1 = Number(number1.value);
    let note2 = Number(number2.value);
    let note3 = Number(number3.value);

    let result = ((note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4)).toFixed(2);

    if (result < 3.5) {
        response.style.color = 'black';
        response.textContent = `Mr/Mrs ${username.value} su nota es: ${result} por lo tanto su nota es insifuciente`;
    } else if (result >= 3.5 || result <= 4.5){
        response.style.color = 'orange';
        response.textContent = `Mr/Mrs ${username.value} su nota es: ${result}`;
    } else{
        response.style.color = 'green';
    response.textContent = `Mr/Mrs ${username.value} su nota es: ${result}`;
    }

}