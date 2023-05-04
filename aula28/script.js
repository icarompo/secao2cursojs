const num = Number(prompt('Type a number: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = num;

texto.innerHTML += `A raíz quadrada dele é: ${Math.sqrt(num)}<br />`;
texto.innerHTML += `${num} é inteiro?: ${Number.isInteger(num)}<br />`;
texto.innerHTML += `${num} é NaN?: ${Number.isNaN(num)}<br />`;
texto.innerHTML += `Arredondado para baixo: ${Math.floor(num)}<br />`;
texto.innerHTML += `Arredondado para cima: ${Math.ceil(num)}<br />`;
texto.innerHTML += `Com duas casas decimais: ${num.toFixed(2)}<br />`;