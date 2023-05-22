const handleSearch = async (event) => {
  event.preventDefault();

  // implemente a consulta a partir daqui

  //// Exemplo de endpoint: https://api.tvmaze.com/search/shows?q=lost

  //// Elementos de leiaute importantes:

  //  #message: use para exibir mensagens aos usuário, por exemplo:

  const message = document.querySelector('#message');
  message.innerHTML = 'exercício ainda não resolvido.';

  //  #shows: conterá os shows, cada um em um <li>, por exemplo:
  // <li>
  //   <img class="poster" src="https://static.tvmaze.com/uploads/images/medium_portrait/0/1389.jpg" />
  //   <span class="show-name">Lost</span>
  // </li>
};

document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelector('#search-form')
    .addEventListener('submit', handleSearch);
});
