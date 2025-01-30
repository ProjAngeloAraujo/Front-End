let button = document.getElementById('button');
let input = document.getElementById('input');
let divItens = document.getElementById('divItens');
let buttonDelete = document.getElementById('buttonDelete');

button.addEventListener('click', Create);

function Create(){
    let inputvalue = input.value;

    let divItemContainer = document.createElement('div');
    divItemContainer.id = 'divItemContainer';

    let paragrafo = document.createElement('p');
    paragrafo.textContent = inputvalue;
    paragrafo.id = 'paragrafo';
    divItemContainer.appendChild(paragrafo);
    
    let buttonDelete = document.createElement('button');
    buttonDelete.textContent = 'excluir';
    buttonDelete.addEventListener('click', () => Delete(divItemContainer));
    divItemContainer.appendChild(buttonDelete);

    divItens.appendChild(divItemContainer);
    
}

function Read(){

}

function Update(){

}

function Delete(item){
    divItens.removeChild(item);
}
