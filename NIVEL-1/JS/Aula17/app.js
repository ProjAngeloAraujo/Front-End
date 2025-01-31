let button = document.getElementById('button');
let input = document.getElementById('input');
let divItens = document.getElementById('divItens');
let itens = [];

button.addEventListener('click', Create);

function Create(){
    let inputvalue = input.value;

    if(inputvalue === "" || inputvalue === undefined || inputvalue === null){
        return 0;
    }

    itens.push(inputvalue);

    Read();
    input.value = '';
}

function Read(){
    divItens.innerHTML = "";

    itens.forEach(function(item, index){

        let divItemContainer = document.createElement('div');
        divItemContainer.className = 'divItemContainer';

        let paragrafo = document.createElement('p');
        paragrafo.textContent = item;
        paragrafo.className = 'paragrafo';
        divItemContainer.appendChild(paragrafo);
        
        let buttonDelete = document.createElement('button');
        buttonDelete.textContent = 'excluir';
        buttonDelete.className = 'buttonDelete';
        buttonDelete.addEventListener('click', () => Delete(index));
        divItemContainer.appendChild(buttonDelete);

        let buttonUpdate = document.createElement('button');
        buttonUpdate.textContent = 'editar';
        buttonUpdate.className = 'buttonUpdate';
        buttonUpdate.addEventListener('click', () => Update(index));
        divItemContainer.appendChild(buttonUpdate);

        divItens.appendChild(divItemContainer);
    });
    
}

function Update(index){
    let novoValor = prompt("Digite o novo Valor:");
    if(novoValor === "" || novoValor === undefined || novoValor === null){
        return 0;
    }
    itens.splice(index, 1, novoValor)
    Read();
}

function Delete(index){
    itens.splice(index, 1);
    Read();
}