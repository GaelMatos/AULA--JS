//questions:
// como pegar o elemneto da tela? 
//    R: document.querySelector('p')


// [JS] como trasformar tudo em maisculo?
// R :nome.ToUpperCase();

// [Log] como trocar apenas o nome do jogador?


// receber a informação (nome) do usuario 
//  let nome = prompt("Qual é o seu nome?");


// processar a informação (nome) : maisculo
//  var nomeProcesado = nome.topUpperCase();

// informar na tela a informação processada
// let p = document.querySelector('p');
// p.innerText = 'Jogador 1:' + nomeProcesado;

function evento() {
    let nome = prompt("Qual é o seu nome?");
    let p = document.querySelector('p');

    var nomeProcessado = nome.toUpperCase();
    
    p.innerText = 'Jogador 1:' + nomeProcessado;
}
 
addEventListener('click', evento)
 


