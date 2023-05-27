const handleSearch = async (event) => {
  event.preventDefault();

//mensagem de carregamento
const message = document.querySelector('#message');
message.innerHTML = 'Buscando...';

  
  //limpa lista de programas//
  const listDeProgramas = document.querySelector('#shows');
  listDeProgramas.innerHTML = '';

  // Obter texto digitado pelo usuário//
  const caixadeBusca = document.querySelector('#query');
  const texteASerBuscado = caixadeBusca.value;
  
  
  //Url de consulta//
  const url = `https://api.tvmaze.com/search/shows?q=${texteASerBuscado}`;
  
  //Consulta da api//
  const resposta = await fetch(url);
  const programas = await resposta.json();

  if (programas.length == 0) {
    //não encontrado
    message.innerHTML = 'Nenhum resultado encontrado';
    return;

  }

  //limpar a mensagem
  message.innerHTML = '';


  //programas//
  programas.forEach((programa) => {
  const titulo = programa?.show?.name || '';
  const imagem = programa?.show?.image?.medium || '';

    //inserir itens na lista de resultados 
    listDeProgramas.insertAdjacentHTML('beforeend', 
    `
    <li>
    <img class="poster" src="${imagem}">
    <span class="show-name">${titulo}</span>
    </li>
    `
    );



  });


};

document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelector('#search-form')
    .addEventListener('submit', handleSearch);
});
