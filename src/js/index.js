// esse é um comentario
/*
teste 1*/
//console.log(document.getElementById('ciclope'))

// individual
/*const itemCiclope = document.getElementById('ciclope');
console.log(itemCiclope);*/


// PASSO 1 PEGAR OS PERSONAGENS NO JS PRA PODER VERIFICAR QUANDO O USUARIO PASSAR O MOUSE EM CIMA

const personagens = document.querySelectorAll('.personagem');

// PASSO 2 ADICIONAR A CLASSE SELECIONADO NO PERSONAGEM QUE USUARIO PAASSAR O MOUSE

personagens.forEach((personagem) => {
    personagem.addEventListener('click', () => {

        //remover selecionado
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        // passo 2 mudar pesornagem selecionado

        // pega 

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        const idPersonagem = personagem.attributes.id.value;

        imagemPersonagemGrande.src = `./src/imagens/imagens/card-${idPersonagem}.png`;

        // alterando o nome

        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');


        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})