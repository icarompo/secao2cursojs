const num1 = 10;
const num2 = 5;
const num3 = '2.5';

//Operações
const soma = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;
const divisao = num1 / num2;    
const exponenciacao = num2 ** num2;
const restoDivisao = num2 % num1;

let contador = 0;

let texto = `Arithmetic operations between 1º(${num1}) and 2º(${num2})Number:\nAddition: ${soma}\nSubtraction: ${subtracao}\nMultiplication: ${multiplicacao}\nDivision: ${divisao}\nExponentiation: ${exponenciacao}\nRemainder: ${restoDivisao}`;

console.log(texto);

//Atribuicao de número
console.log(`\nIncrement using the first number going till 0 to 50 and 50 to 30`);
contador+=num1;
console.log(contador);
contador+=num1;
console.log(contador);
contador+=num1;
console.log(contador);  
contador+=num1;
console.log(contador);
contador+=num1;
console.log(contador);
contador-=num1;
console.log(contador);
contador-=num1;
console.log(contador);

//Parseint
texto = `\nConverting 2.5 using functions:\nFloat(parseFloat): ${parseFloat(num3)}\nInteger(parseInt): ${parseInt(num3)}\nNumber(Number): ${Number(num3)}`
console.log(texto)