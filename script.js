document.addEventListener('DOMContentLoaded', function() {
  const form = this.getElementById('form-livro')
  const listaLivros = document.getElementById('lista-livros')

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const ano = document.getElementById('ano').value;

    const livroItem = document.createElement('li');
    livroItem.innerHTML = `
      <strong>${titulo}</strong>
      <span>por ${autor} <span>(${ano})</span></span>
      <button class="remover">Remover</button>
    `;

    // botão remover
    livroItem.querySelector('.remover').addEventListener('click', function() {
      listaLivros.removeChild(livroItem);
    });
  
    listaLivros.appendChild(livroItem)
  
    form.reset()
  })
})

