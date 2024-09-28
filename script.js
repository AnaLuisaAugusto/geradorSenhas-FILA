let filaSenhas = [];
let ultimaSenhaComum = 0;
let ultimaSenhaEspecial = 0;

// Função para gerar uma nova senha comum
function gerarSenhaComum() {
    ultimaSenhaComum++;  // Incrementa o número da senha comum
    const senhaComum = `C-${ultimaSenhaComum}`;  // Cria a senha comum
    filaSenhas.push(senhaComum);  // Adiciona a senha à fila
    adicionarSenhaNaTabela(senhaComum); 
}

// Função para gerar uma nova senha especial
function gerarSenhaEspecial() {
    ultimaSenhaEspecial++;  // Incrementa o número da senha especial
    const senhaEspecial = `E-${ultimaSenhaEspecial}`;  // Cria a senha especial
    filaSenhas.push(senhaEspecial); 
    adicionarSenhaNaTabela(senhaEspecial);  
}

// Função para adicionar a senha na tabela
function adicionarSenhaNaTabela(senha) {
    const tabelaBody = document.getElementById('filaSenhas');
    const novaLinha = document.createElement('tr'); 

    // Cria uma célula da tabela para a nova senha
    const novaCelula = document.createElement('td');
    novaCelula.classList.add('border', 'border-gray-500', 'px-4', 'py-2', 'text-center');
    novaCelula.textContent = senha;

    // Adiciona a célula na nova linha
    novaLinha.appendChild(novaCelula);
    tabelaBody.appendChild(novaLinha);  // Adiciona a nova linha à tabela
}

// Função para remover a primeira senha comum
function removerSenhaComum() {
    if (filaSenhas.length === 0) {
        alert('Não foi possível remover a Senha Comum, crie uma fila primeiro!');
        return;
    }

    // Encontra a primeira senha comum
    const index = filaSenhas.findIndex(senha => senha.startsWith('C-'));
    if (index !== -1) {
        filaSenhas.splice(index, 1);  // Remove a senha comum da fila

        // Atualiza a tabela para remover a primeira linha correspondente
        const tabelaBody = document.getElementById('filaSenhas');
        tabelaBody.deleteRow(index);  // Remove a linha correspondente
    } else {
        alert('Não há senhas comuns na fila!');
    }
}

// Função para remover a primeira senha especial
function removerSenhaEspecial() {
    if (filaSenhas.length === 0) {
        alert('Não foi possível remover a Senha Especial, crie uma fila primeiro!');
        return;
    }

    // Encontra a primeira senha especial
    const index = filaSenhas.findIndex(senha => senha.startsWith('E-'));
    if (index !== -1) {
        filaSenhas.splice(index, 1);  // Remove a senha especial da fila

        // Atualiza a tabela para remover a primeira linha
        const tabelaBody = document.getElementById('filaSenhas');
        tabelaBody.deleteRow(index);  // Remove a linha correspondente
    } else {
        alert('Não há senhas especiais na fila!');
    }
}

// Evento do botão para gerar senha comum
document.getElementById('gerarSenhaComumBtn').addEventListener('click', gerarSenhaComum);

// Evento do botão para gerar senha especial
document.getElementById('gerarSenhaEspecialBtn').addEventListener('click', gerarSenhaEspecial);

// Evento do botão para remover senha comum
document.getElementById('removerSenhaComumBtn').addEventListener('click', removerSenhaComum);

// Evento do botão para remover senha especial
document.getElementById('removerSenhaEspecialBtn').addEventListener('click', removerSenhaEspecial);