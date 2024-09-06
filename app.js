function pesquisar() {
    const termoPesquisa = document.querySelector('#campo-pesquisa').value.trim().toLowerCase();
    const resultadosSection = document.getElementById("resultados-pesquisa");
  
    // Verifica se o termo de pesquisa está vazio
    if (!termoPesquisa) {
      // Limpa os resultados e exibe uma mensagem estilizada se o campo estiver vazio
      resultadosSection.innerHTML = '<p class="mensagem-erro">Por favor, digite um termo de pesquisa.</p>';
      return; // Interrompe a função se o campo estiver vazio
    }
  
    // Filtra os resultados com base no termo de pesquisa
    const resultadosFiltrados = dados.filter(dado => 
      dado.titulo.toLowerCase().includes(termoPesquisa) ||  // Permite buscar pelo titulo
      dado.aldeia.toLowerCase().includes(termoPesquisa) // Permite buscar por aldeia
    );
  
    // Renderiza os resultados filtrados
    function renderResultados(dados) {
      resultadosSection.innerHTML = dados.map(dado => `
        <div class="item-resultado">
        <img src="${dado.imagem}" alt="${dado.titulo}" class="imagem-personagem">
          <h2>
           ${dado.titulo} 
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <p><strong>Data de Nascimento:</strong> ${dado.dataNascimento}</p>
          <p><strong>Aldeia:</strong> ${dado.aldeia}</p>
          <a href="${dado.link}" target="_blank" rel="noopener noreferrer">Leia a história completa</a>
        </div>
      `).join('');
  
      // Se nenhum resultado for encontrado
      if (dados.length === 0) {
        resultadosSection.innerHTML = `<p class="mensagem-erro">Nenhum resultado encontrado.</p>`;
      }
    }
  
    renderResultados(resultadosFiltrados);
  }
  
  function limparPesquisa() {
    document.querySelector('#campo-pesquisa').value = ''; // Limpar campo de pesquisa
    document.getElementById("resultados-pesquisa").innerHTML = ''; // Limpar resultados
  }
  