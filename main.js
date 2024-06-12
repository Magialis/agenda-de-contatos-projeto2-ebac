const form = document.querySelector('#form-agenda');
const contatos = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.querySelector('#nome-contato');
    const inputNumeroTelefone = document.querySelector('#numero-telefone');

    if (telefones.includes(parseFloat(inputNumeroTelefone.value))) {
        alert(`O número: ${inputNumeroTelefone.value} já foi inserido`)
    } else {    
        telefones.push(parseFloat(inputNumeroTelefone.value));
        contatos.push(inputNomeContato.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}