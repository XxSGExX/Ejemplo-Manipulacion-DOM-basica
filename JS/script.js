const tittle = document.querySelector('h1');
const form = document.getElementById('form');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btnCalcular');
const pResult = document.getElementById("result");

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
   // console.log({event});
   event.preventDefault();
   const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
   pResult.innerText = "Resultado:" + sumaInputs;
}


