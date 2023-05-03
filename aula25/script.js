const nome = prompt('Digite seu nome completo: ');

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

document.body.innerHTML += `O seu nome é: ${toTitleCase(nome)}<br />`;
document.body.innerHTML += `Seu nome tem ${((nome.split(' ').join('')).length)} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: "${nome[1]}"<br />`;
document.body.innerHTML += `Primeiro índice da letra "A" no seu nome: ${nome.indexOf('a')}<br />`;
document.body.innerHTML += `Ultimo índice da letra "A" no seu nome: ${nome.lastIndexOf('a')}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice((nome.length)-3, nome.length)}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br />`;

