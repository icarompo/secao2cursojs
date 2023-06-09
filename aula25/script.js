const nome = prompt('Digite seu nome completo: ');

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

document.body.innerHTML += `O seu nome é: <strong>${toTitleCase(nome)}</strong><br />`;
document.body.innerHTML += `Seu nome tem <strong>${((nome.split(' ').join('')).length)}</strong> letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong>"${nome.charAt(1)}</strong>"<br />`;
document.body.innerHTML += `Primeiro índice da letra "A" no seu nome: <strong>${nome.indexOf('a')}</strong><br />`;
document.body.innerHTML += `Ultimo índice da letra "A" no seu nome: <strong>${nome.lastIndexOf('a')}</strong><br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice((nome.length)-3, nome.length)}</strong><br />`;
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong><br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong><br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong><br />`;

