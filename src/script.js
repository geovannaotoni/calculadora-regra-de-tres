const firstNumber = document.getElementById('first-number');
const secondNumber = document.getElementById('second-number');
const thirdNumber = document.getElementById('third-number');
const result = document.getElementById('result');
const button = document.getElementById('btn-calculate');

button.addEventListener('click', () => {
  const resultado = thirdNumber.value * secondNumber.value / firstNumber.value;
  if (isNaN(resultado)) {
    result.innerHTML = 'Digite um valor válido';
  } else {
    result.innerHTML = resultado;
  }
});
