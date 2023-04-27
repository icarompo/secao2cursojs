//Icaro Mesquita Ponce tem 20 anos, pesa 68 kg
//tem 1.8 de altura e seu IMC é de 
const nome = 'Icaro';
const sobrenome = 'Mesquita Ponce';
const idade = 20;
const peso = 68;
const altura = 1.80;

let imc = peso/(altura**2);
let anoNascimento = 2023-idade;

imc = imc + 5;

let texto = `Meu nome é ${nome} ${sobrenome} Tenho ${idade} anos de idade,\nnascido em ${anoNascimento} peso ${peso} kg e tenho ${altura} de altura,\nmeu IMC  5 é igual a ${imc}`;

console.log(texto);